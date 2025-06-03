const fs = require("fs")
const puppeteer = require("puppeteer")
const marked = require("marked")

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false,
})

async function generatePDF(markdownText, outputFile = "output.pdf") {
  const template = fs.readFileSync("template.html", "utf8")

  const htmlContent = marked.parse(markdownText)

  const enhancedContent = enhanceHTMLContent(htmlContent)

  const finalHTML = template.replace("{{{content}}}", enhancedContent)

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  const page = await browser.newPage()

  await page.setContent(finalHTML, {
    waitUntil: "networkidle0",
    timeout: 30000,
  })

  await page.pdf({
    path: outputFile,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: `
      <div style="font-size: 10px; color: #9ca3af; text-align: center; width: 100%; margin: 0 30px;">
        <span class="pageNumber"></span> / <span class="totalPages"></span>
      </div>
    `,
    margin: {
      top: "0px",
      bottom: "60px",
      left: "0px",
      right: "0px",
    },
  })

  await browser.close()
  console.log(`✅ PDF generado con estilo mejorado: ${outputFile}`)
}

function enhanceHTMLContent(htmlContent) {
  let enhanced = htmlContent

  enhanced = enhanced.replace(/<table>/g, '<table class="enhanced-table">')

  enhanced = enhanced.replace(/<em>\*([^*]+)\*<\/em>/g, '<em class="highlight">$1</em>')

  enhanced = enhanced.replace(/<ul>/g, '<ul class="enhanced-list">')
  enhanced = enhanced.replace(/<ol>/g, '<ol class="enhanced-list">')

  return enhanced
}

async function generateAdvancedPDF(markdownText, options = {}) {
  const defaultOptions = {
    outputFile: "output.pdf",
    format: "A4",
    quality: "high",
    includeBackground: true,
  }

  const config = { ...defaultOptions, ...options }

  await generatePDF(markdownText, config.outputFile)
}

if (require.main === module) {
  const md = fs.readFileSync("content.md", "utf8")
  generatePDF(md)
}

module.exports = { generatePDF, generateAdvancedPDF }

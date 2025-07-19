const htmlInput = document.getElementById("html-code");
const cssInput = document.getElementById("css-code");
const jsInput = document.getElementById("js-code");
const outputFrame = document.getElementById("output-frame");

function updatePreview() {
  const html = htmlInput.value;
  const css = `<style>${cssInput.value}</style>`;
  const js = `<script>${jsInput.value}<\/script>`;
  const finalCode = html + css + js;

  const output = outputFrame.contentDocument || outputFrame.contentWindow.document;
  output.open();
  output.write(finalCode);
  output.close();
}

htmlInput.addEventListener("input", updatePreview);
cssInput.addEventListener("input", updatePreview);
jsInput.addEventListener("input", updatePreview);

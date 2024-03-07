const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

console.log(containerEl)

function createBlocks() {
  // first, remove the example blocks
  containerEl.innerHTML = "";
  console.log("create blocks");

  for(let i=0; i< blockScales.length-1; i++){
        let blockEl = `
        <div class="block" style=" width: ${blockScales[i]*100}px; height: ${blockScales[i]*100}px; ">
    </div>
      `;
      containerEl.insertAdjacentHTML('beforeend', blockEl)
  }

}
function removeBlocks() {
  console.log("remove blocks");
  containerEl.innerHTML = "";
}

createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);

const blockScales = [
  "0.6",
  "0.65",
  "0.7",
  "0.75",
  "0.8",
  "0.85",
  "0.9",
  "0.95",
]

for(let i = 0; i < 8; i++) {
  console.log("number: ", blockScales [i]);
}

for (let i=0; i< blockScales.length-1; i++){
  let blockEl = `
    <div class="block" style="width: ${blockScales[i]*100}px; height:  ${blockScales[i]*100}px;">

</div>
  `;
  containerEl.insertAdjacentHTML('beforeend', blockEl)
  console.log(blockEl)
  }	

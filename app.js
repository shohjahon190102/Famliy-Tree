let lists = [
  ];

  function treeList(father = null, container = document.getElementById("tree")){
    for(let i = 0; i < lists.length; i++){
      if(lists[i].father === father){
        let div = document.createElement("div");
        div.className = father ? "child card" : "card";
        div.innerHTML = "<b>" + lists[i].name + "</b>";
        div.innerHTML = `
          <span>${lists[i].name}</span>
          <button class="clear-btn" onclick="removeItem('${lists[i].name}')"></button>`;
        container.appendChild(div);
        treeList(lists[i].name, div);
      }
    }
  }

  function addElement(){
    let name = document.getElementById("childName").value.trim();
    let father = document.getElementById("parentName").value.trim();

    if(!name) return alert("Ismni kiriting");

    lists.push({
      name: name,
      father: father ? father : null
    });

    document.getElementById("tree").style.display = "block";

    document.getElementById("tree").innerHTML = "";
    treeList();
  }

  treeList();

  function removeItem(name){
  lists = lists.filter(item => item.name !== name && item.father !== name);

  document.getElementById("tree").innerHTML = "";
  treeList();

  // agar list bo'sh bo'lsa → yashir
  if(lists.length === 0){
    document.getElementById("tree").style.display = "none";
  }
}
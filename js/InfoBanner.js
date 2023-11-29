AFRAME.registerComponent("info-banner", {
    schema:{
        itemId:{default:"", type:"string"}
    },
    update:function(){
        this.createBanner()
        
    },

    createBanner:function(){
        postersInfo ={
            asta:{
                banner_url:"./assets/9781421587189_l.jpg",
                title:"asta",
                release_year:"1995",
                description:"Magicless"
            },
            goku:{
                banner_url:"./assets/9781421592541_p0_v1_s1200x630.jpg",
                title:"goku",
                release_year:"1995",
                description:"Magicless"
            },
            luffy:{
                banner_url:"./assets/9781569319017_p0_v1_s1200x630.jpg",
                title:"luffy",
                release_year:"1995",
                description:"Magicless"
            },
            ichigo:{
                banner_url:"./assets/s-l500.jpg",
                title:"ichigo",
                release_year:"1995",
                description:"Magicless"
            },


        };
        const {itemId} =this.data
        const fadeBackgroundEl=document.querySelector("#fadeBackground")
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive:"plane",width:0.9,height:1})
        entityEl.setAttribute("material",{color:"black"})
        entityEl.setAttribute("position",{x:0,y:0.1,z:-1})
        entityEl.setAttribute("id",`${itemId}-banner`)

        const item=postersInfo[itemId]
        const imageEl=this.createImageEl(item)
        const titleEl=this.createTitleEl(item)
        const descriptionEl=this.createDescriptionEl(item)

        entityEl.appendChild(imageEl)
        entityEl.appendChild(titleEl)
        entityEl.appendChild(descriptionEl)
        fadeBackgroundEl.appendChild(entityEl)
    },

    createImageEl:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive:"plane",width:0.85,height:0.4})
        entityEl.setAttribute("material",{src:item.banner_url})
        entityEl.setAttribute("position",{x:0,y:0.3,z:0.05})
        return entityEl
    },

    createTitleEl:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("text",{shader:"msdf",anchor:"left",width:1.2,height:2,color:"white",font:"https://cdn.aframe.io/examples/ui/Viga-Regular.json",
    value:`${item.title}(${item.release_year})`})
        entityEl.setAttribute("position",{x:-0.4,y:0.02,z:0.05})
        return entityEl
    },

    createDescriptionEl:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("text",{shader:"msdf",anchor:"left",width:0.75,height:2,color:"white",font:"https://cdn.aframe.io/examples/ui/Viga-Regular.json",
    value:item.description})
        entityEl.setAttribute("position",{x:-0.4,y:-0.24,z:0.05})
        return entityEl
    },
    
  });
  
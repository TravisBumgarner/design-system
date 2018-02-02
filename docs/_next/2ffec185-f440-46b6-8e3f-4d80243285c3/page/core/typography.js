
          window.__NEXT_REGISTER_PAGE('/core/typography', function() {
            var comp = module.exports=webpackJsonp([23],{1323:function(e,t,a){e.exports=a(1324)},1324:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var i=a(3),s=l(i),n=a(1),r=l(n);Object.defineProperty(t,"__esModule",{value:!0});var d=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(d),c=a(5),u=function(e){return r.default.createElement("div",{className:"jsx-3347489703"},r.default.createElement("div",{className:"jsx-3347489703 family"},r.default.createElement("div",{className:"jsx-3347489703"},"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),r.default.createElement("div",{className:"jsx-3347489703"},"abcdefghijklmnopqrstuvwxyz"),r.default.createElement("div",{className:"jsx-3347489703"},"0123456789")),r.default.createElement(c.P,null,"Apply the font family to the entire page. The recommended method is to include the normalize stylesheet. First install:"),r.default.createElement(c.Code,{language:"bash"},"npm install @pluralsight/ps-design-system-normalize"),r.default.createElement(c.P,null,"Then include it in your global stylesheet:"),r.default.createElement(c.Code,{language:"css"},'@import "@pluralsight/ps-design-system-normalize";'),r.default.createElement(s.default,{styleId:"3347489703",css:[".family.jsx-3347489703{background:"+o.default.colors.bone+";padding:"+o.default.layout.spacingLarge+";color:"+o.default.colors.gray06+";font-size:"+o.default.type.fontSizeLarge+";line-height:"+o.default.type.lineHeightExtra+";-webkit-letter-spacing:"+o.default.layout.spacingSmall+";-moz-letter-spacing:"+o.default.layout.spacingSmall+";-ms-letter-spacing:"+o.default.layout.spacingSmall+";letter-spacing:"+o.default.layout.spacingSmall+";border-radius:12px;}"]}))},m=[{label:"BOLD",weight:700,varName:"psTypeFontWeightBold"},{label:"MEDIUM",weight:500,varName:"…ypeFontWeightMedium"},{label:"BOOK",weight:400,varName:"psTypeFontWeightBook"},{label:"LIGHT",weight:300,varName:"psTypeFontWeightLight"},{label:"EXTRA LIGHT",weight:200,varName:"…ypeFontWeightXLight"}],f=function(e){return r.default.createElement("div",{className:"jsx-3893962248"},r.default.createElement("div",{className:"jsx-3893962248 weights"},m.map(function(e,t){return r.default.createElement("div",{key:t,className:"jsx-3893962248 weight"},r.default.createElement("div",{className:"jsx-3893962248 box"},r.default.createElement("div",{style:{fontWeight:e.weight},className:"jsx-3893962248 weightLetters"},"Aa"),r.default.createElement("div",{className:"jsx-3893962248 weightLabel"},e.label," (",e.weight,")")),r.default.createElement("code",{className:"jsx-3893962248 weightVar"},e.varName))})),r.default.createElement("div",{className:"jsx-3893962248 codeExample"},r.default.createElement(c.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector { font-weight: var(--psTypeFontWeightBold); }')),r.default.createElement(s.default,{styleId:"3893962248",css:[".weights.jsx-3893962248{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc("+o.default.layout.spacingLarge+" / -2);}",".weight.jsx-3893962248{-webkit-flex:1;-ms-flex:1;flex:1;margin:calc("+o.default.layout.spacingLarge+" / 2);color:"+o.default.colors.gray06+";text-align:center;}",".box.jsx-3893962248{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:12px;background:"+o.default.colors.bone+";height:150px;min-width:150px;}",".weightLetters.jsx-3893962248{font-size:"+o.default.type.fontSizeGigantic+";-webkit-letter-spacing:"+o.default.type.letterSpacingGigantic+";-moz-letter-spacing:"+o.default.type.letterSpacingGigantic+";-ms-letter-spacing:"+o.default.type.letterSpacingGigantic+";letter-spacing:"+o.default.type.letterSpacingGigantic+";}",".weightLabel.jsx-3893962248{color:"+o.default.colors.gray03+";font-size:"+o.default.type.fontSizeXSmall+";}",".weightVar.jsx-3893962248{margin-top:"+o.default.layout.spacingSmall+";font-size:"+o.default.type.fontSizeXSmall+";color:"+o.default.colors.pink+";}",".codeExample.jsx-3893962248{margin-top:"+o.default.layout.spacingLarge+";}"]}))},g=[{label:"Gigantic",size:"60px",varName:"psTypeFontSizeGigantic"},{label:"Jumbo",size:"48px",varName:"psTypefontSizeJumbo"},{label:"XX-Large",size:"36px",varName:"psTypeFontSizeXXLarge"},{label:"X-Large",size:"30px",varName:"psTypeFontSizeXLarge"},{label:"Large",size:"24px",varName:"psTypeFontSizeLarge"},{label:"Medium",size:"18px",varName:"psTypeFontSizeMedium"},{label:"Small",size:"14px",varName:"psTypeFontSizeSmall"},{label:"X-Small",size:"12px",varName:"psTypeFontSizeXSmall"}],p=function(e){return r.default.createElement("div",{className:"jsx-2315593927"},r.default.createElement("div",{className:"jsx-2315593927 sizes"},g.map(function(e,t){return r.default.createElement("div",{key:t,className:"jsx-2315593927 size"},r.default.createElement("div",{style:{fontSize:e.size},className:"jsx-2315593927 sizeSentence"},"The quick brown fox jumps over the lazy dog."),r.default.createElement("div",{className:"jsx-2315593927 sizeLabel"},e.size," - ",e.label),r.default.createElement("code",{className:"jsx-2315593927 sizeVar"},e.varName))})),r.default.createElement(c.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector { font-size: var(--psTypeFontSizeLarge); }'),r.default.createElement(s.default,{styleId:"2315593927",css:[".sizes.jsx-2315593927{background:"+o.default.colors.bone+";border-radius:12px;white-space:nowrap;overflow:hidden;padding:"+o.default.layout.spacingLarge+";margin-bottom:"+o.default.layout.spacingMedium+";}",".size.jsx-2315593927{color:"+o.default.colors.gray06+";}",".size.jsx-2315593927+.size.jsx-2315593927{margin-top:"+o.default.layout.spacingLarge+";}",".sizeSentence.jsx-2315593927{color:"+o.default.colors.gray06+";margin-bottom:"+o.default.layout.spacingXSmall+";}",".sizeLabel.jsx-2315593927{color:"+o.default.colors.gray03+";font-size:"+o.default.type.fontSizeXSmall+";}",".sizeVar.jsx-2315593927{margin-top:"+o.default.layout.spacingSmall+";font-size:"+o.default.type.fontSizeXSmall+";color:"+o.default.colors.pink+";}"]}))},x=function(e){return r.default.createElement("div",{className:"jsx-2192369612"},r.default.createElement("div",{className:"jsx-2192369612 lineHeights"},r.default.createElement("div",{className:"jsx-2192369612 lineHeight"},r.default.createElement("div",{className:"jsx-2192369612 text textHuge"},r.default.createElement("div",{className:"jsx-2192369612 textBg textBgHuge"}),r.default.createElement("div",{className:"jsx-2192369612 textInner"},"Lorem ipsum dolor sit amet, consectetur")),r.default.createElement("div",{className:"jsx-2192369612 label"},"40px - Huge"),r.default.createElement("code",{className:"jsx-2192369612 varName"},"psTypeLineHeightHuge")),r.default.createElement("div",{className:"jsx-2192369612 lineHeight"},r.default.createElement("div",{className:"jsx-2192369612 text textExtra"},r.default.createElement("div",{className:"jsx-2192369612 textBg textBgExtra"}),r.default.createElement("div",{className:"jsx-2192369612 textInner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit,")),r.default.createElement("div",{className:"jsx-2192369612 label"},"32px - Extra"),r.default.createElement("code",{className:"jsx-2192369612 varName"},"psTypeLineHeightExtra")),r.default.createElement("div",{className:"jsx-2192369612 lineHeight"},r.default.createElement("div",{className:"jsx-2192369612 text textStandard"},r.default.createElement("div",{className:"jsx-2192369612 textBg textBgStandard"}),r.default.createElement("div",{className:"jsx-2192369612 textInner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore")),r.default.createElement("div",{className:"jsx-2192369612 label"},"24px - Standard"),r.default.createElement("code",{className:"jsx-2192369612 varName"},"psTypeLineHeightStandard")),r.default.createElement("div",{className:"jsx-2192369612 lineHeight"},r.default.createElement("div",{className:"jsx-2192369612 text textTight"},r.default.createElement("div",{className:"jsx-2192369612 textBg textBgTight"}),r.default.createElement("div",{className:"jsx-2192369612 textInner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis")),r.default.createElement("div",{className:"jsx-2192369612 label"},"20px - Tight"),r.default.createElement("code",{className:"jsx-2192369612 varName"},"psTypeLineHeightTight"))),r.default.createElement(s.default,{styleId:"2192369612",css:[".lineHeights.jsx-2192369612{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc("+o.default.layout.spacingLarge+" / -2);}",".lineHeight.jsx-2192369612{width:calc(50% - "+o.default.layout.spacingLarge+");margin:calc("+o.default.layout.spacingLarge+" / 2);border-radius:12px;padding:"+o.default.layout.spacingLarge+";background:"+o.default.colors.bone+";}",".text.jsx-2192369612{position:relative;overflow:hidden;}",".textInner.jsx-2192369612{position:relative;}",".textBg.jsx-2192369612{position:absolute;height:300px;width:100%;background:linear-gradient( to bottom, #b4d9f2, #b4d9f2 1px, #efefef 1px, #efefef );background-size:1px 8px;}",".textHuge.jsx-2192369612{font-size:"+o.default.type.fontSizeXLarge+";line-height:"+o.default.type.lineHeightHuge+";}",".textExtra.jsx-2192369612{font-size:"+o.default.type.fontSizeLarge+";line-height:"+o.default.type.lineHeightExtra+";}",".textStandard.jsx-2192369612{font-size:"+o.default.type.fontSizeMedium+";line-height:"+o.default.type.lineHeightStandard+";}",".textTight.jsx-2192369612{font-size:"+o.default.type.fontSizeXSmall+";line-height:"+o.default.type.lineHeightTight+";}",".textBgHuge.jsx-2192369612{top:31px;}",".textBgExtra.jsx-2192369612{top:25px;}",".textBgStandard.jsx-2192369612{top:18px;}",".textBgTight.jsx-2192369612{top:14px;background-size:1px 4px;}",".label.jsx-2192369612{margin-top:"+o.default.layout.spacingSmall+";color:"+o.default.colors.gray03+";font-weight:"+o.default.type.fontWeightMedium+";}",".varName.jsx-2192369612{margin-top:"+o.default.layout.spacingSmall+";font-size:"+o.default.type.fontSizeXSmall+";color:"+o.default.colors.pink+";}"]}))};t.default=(0,c.withServerProps)(function(e){return r.default.createElement(c.Chrome,null,r.default.createElement(c.Content,{title:"Typography"},r.default.createElement(c.PageHeading,null,"Typography"),r.default.createElement(c.SectionHeading,null,"Install the Font"),r.default.createElement(c.P,null,"To use the Pluralsight font-family on your site, you must install it by importing it from typography.com using Pluralsight's assigned CSS Key."),r.default.createElement(c.Code,{lang:"css"},"@import url(https://cloud.typography.com/6966154/691568/css/fonts.css);"),r.default.createElement(c.SectionHeading,null,"Font family"),r.default.createElement(c.P,null,"Pluralsight's font family for the web is Gotham SSm."),r.default.createElement(u,null),r.default.createElement(c.SectionHeading,null,"Font weight"),r.default.createElement(c.P,null,"Five Gotham SSm font weights are available for use."),r.default.createElement(f,null),r.default.createElement(c.SectionHeading,null,"Font size"),r.default.createElement(c.P,null,"Eight Gotham SSm font sizes are available."),r.default.createElement(p,null),r.default.createElement(c.SectionHeading,null,"Line height"),r.default.createElement(c.P,null,"Four line height increments are available. Each font size also has a default line height."),r.default.createElement(x,null),r.default.createElement("div",{style:{marginTop:o.default.layout.spacingLarge}},r.default.createElement(c.Code,{language:"css"},'@import "@pluralsight/ps-design-system-core";\n.mySelector { line-height: var(--psTypeLineHeightStandard); }'))))})}},[1323]);
            return { page: comp.default }
          })
        
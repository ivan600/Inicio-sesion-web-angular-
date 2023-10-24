import { Component } from '@angular/core';
import { Card } from 'src/card';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  cardsRolex:Card[] = [];
  cardsOmega:Card[] = [];
  cardsPatek:Card[] = [];

  constructor(){
    function openUrl(url:string) {
      window.open(url);
    }

    var data = {
      "Rolex": {
        "models": [
          {
            "name": "Datejust",
            "price": "10.250€",
            "characteristics": {
              "case": "Oyster, 36 mm, acero Oystersteel y oro amarillo",
              "bracelet": "Oyster, eslabones planos de tres piezas",
              "dial": "Champán",
              "precision": "Rendimiento cronométrico superlativo",
              "water_resistance": "Hermético hasta 100 metros/330 pies"
            },
            "image_url": "https://content.rolex.com/v7/dam/2023-06/upright-c/m126334-0001.png?impolicy=v7&imwidth=1600",
            "productUrl": "https://www.rolex.com/es/watches/datejust/m126334-0001"

          },
          {
            "name": "Submariner",
            "price": "15.600€",
            "characteristics": {
              "case": "Oyster, 41 mm, acero Oystersteel",
              "bracelet": "Oyster, eslabones planos de tres piezas",
              "dial": "Negro",
              "precision": "Rendimiento cronométrico superlativo",
              "water_resistance": "Hermético hasta 300 metros/1.000 pies"
            },
            "image_url": "https://content.rolex.com/v7/dam/2023-06/upright-c/m126613lb-0002.png?impolicy=v7&imwidth=1600",
            "productUrl": "https://www.rolex.com/es/watches/submariner/m126613lb-0002"
          },
          {
            "name": "GMT-Master II",
            "price": "16.450€",
            "characteristics": {
              "case": "Oyster, 40 mm, acero Oystersteel",
              "bracelet": "Oyster, eslabones planos de tres piezas",
              "dial": "Negro",
              "precision": "Rendimiento cronométrico superlativo",
              "water_resistance": "Hermético hasta 100 metros/330 pies"
            },
            "image_url": "https://content.rolex.com/v7/dam/2023-06/upright-c/m126713grnr-0001.png?impolicy=v7&imwidth=1600",
            "productUrl": "https://www.rolex.com/es/watches/gmt-master-ii/m126713grnr-0001"

          },
          {
            "name": "Day-Date",
            "price": "63.200€",
            "characteristics": {
              "case": "Oyster, 40 mm, oro amarillo",
              "bracelet": "President, eslabones semicirculares de tres piezas",
              "dial": "Champán",
              "precision": "Rendimiento cronométrico superlativo",
              "water_resistance": "Hermético hasta 100 metros/330 pies"
            },
            "image_url": "https://content.rolex.com/v7/dam/2023-06/upright-c/m228236-0012.png?impolicy=v7&imwidth=1600",
            "productUrl": "https://www.rolex.com/es/watches/day-date/m228236-0012"

          },
          {
            "name": "Cosmograph Daytona",
            "price": "77.700€",
            "characteristics": {
              "case": "Oyster, 40 mm, acero Oystersteel",
              "bracelet": "Oyster, eslabones planos de tres piezas",
              "dial": "Negro",
              "precision": "Rendimiento cronométrico superlativo",
              "water_resistance": "Hermético hasta 100 metros/330 pies"
            },
            "image_url": "https://content.rolex.com/v7/dam/2023-06/upright-c/m126506-0001.png?impolicy=v7&imwidth=1600",
            "productUrl": "https://www.rolex.com/es/watches/cosmograph-daytona/m126506-0001"
          },
          {
            "name": "Explorer II",
            "price": "8.900€",
            "characteristics": {
              "case": "Oyster, 42 mm, acero Oystersteel",
              "bracelet": "Oyster, eslabones planos de tres piezas",
              "dial": "Blanco",
              "precision": "Rendimiento cronométrico superlativo",
              "water_resistance": "Hermético hasta 100 metros/330 pies"
            },
            "image_url": "https://content.rolex.com/v7/dam/2023-06/upright-c/m226570-0002.png?impolicy=v7&imwidth=1600",
            "productUrl": "https://www.rolex.com/es/watches/explorer/m226570-0002"
          },
          {
            "name": "Yacht-Master",
            "price": "18.200€",
            "characteristics": {
              "case": "Oyster, 40 mm, oro Everose",
              "bracelet": "Oysterflex, banda elastómera",
              "dial": "Negro",
              "precision": "Rendimiento cronométrico superlativo",
              "water_resistance": "Hermético hasta 100 metros/330 pies"
            },
            "image_url": "https://content.rolex.com/v7/dam/2023-06/upright-c/m226659-0004.png?impolicy=v7&imwidth=1600",
            "productUrl": "https://www.rolex.com/es/watches/yacht-master/m226659-0004"
          }

        ]
      },
      "Omega": {
        "models": [
          {
            "name": "Seamaster Diver 300M",
            "price": "6.200€",
            "characteristics": {
              "case": "Acero inoxidable, 42 mm",
              "bracelet": "Correa de caucho negra",
              "dial": "Azul",
              "precision": "Certificado Master Chronometer",
              "water_resistance": "Hermético hasta 300 metros/1.000 pies"
            },
            "image_url": "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-300-co-axial-master-chronometer-41-mm-23432412101001-l-06f634.png",
            "productUrl": "https://www.omegawatches.com/es-es/watch-omega-seamaster-300-co-axial-master-chronometer-41-mm-23432412101001"
          },
          {
            "name": "Speedmaster",
            "price": "5.300€",
            "characteristics": {
              "case": "Acero inoxidable, 42 mm",
              "bracelet": "Correa de cuero negra",
              "dial": "Negro",
              "precision": "Certificado Master Chronometer",
              "water_resistance": "Hermético hasta 50 metros/167 pies"
            },
            "image_url": "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-l-92cae8.png",
            "productUrl": "https://www.omegawatches.com/es-es/watch-omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001"
          },
          {
            "name": "Seamaster Aqua Terra",
            "price": "7.800€",
            "characteristics": {
              "case": "Acero inoxidable, 41 mm",
              "bracelet": "Correa de cuero marrón",
              "dial": "Azul",
              "precision": "Certificado Master Chronometer",
              "water_resistance": "Hermético hasta 150 metros/500 pies"
            },
            "image_url": "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-52253412103001-l-039dc6.png",
            "productUrl": "https://www.omegawatches.com/es-es/watch-omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-52253412103001"
          }
        ]
      },
      "PatekPhilippe": {
        "models": [
          {
            "name": "Calatrava",
            "price": "23.500€",
            "characteristics": {
              "case": "Oro rosa, 38 mm",
              "bracelet": "Correa de cuero marrón",
              "dial": "Blanco",
              "precision": "Calibre 215 PS, movimiento manual",
              "water_resistance": "No resistente al agua"
            },
            "image_url": "https://static.patek.com/images/articles/face_white/350/6007G_011_1.jpg",
            "productUrl": "https://www.patek.com/es/watches/calatrava/7118_1g-001"
          },
          {
            "name": "Nautilus",
            "price": "32.500€",
            "characteristics": {
              "case": "Acero inoxidable, 40 mm",
              "bracelet": "Pulsera de acero inoxidable",
              "dial": "Azul",
              "precision": "Movimiento automático",
              "water_resistance": "Hermético hasta 120 metros/400 pies"
            },
            "image_url": "https://static.patek.com/images/articles/face_white/350/7118_1A_001.jpg",
            "productUrl": "https://www.patek.com/es/watches/nautilus/5711_1a-001"
          }
        ]
      }

    };

    var cardsR = [];

    for(var i = 0; i<data.Rolex.models.length; i++){
      cardsR.push(new Card("Rolex "+data.Rolex.models[i].name, data.Rolex.models[i].image_url, data.Rolex.models[i].price, " ", data.Rolex.models[i].productUrl));
    }
    this.cardsRolex = cardsR;

    var cardsO = [];

    for(var i = 0; i<data.Omega.models.length; i++){
      cardsO.push(new Card("Omega "+data.Omega.models[i].name, data.Omega.models[i].image_url, data.Omega.models[i].price, " ", data.Omega.models[i].productUrl));
    }
    this.cardsOmega = cardsO;

    var cardsP = [];

    for(var i = 0; i<data.PatekPhilippe.models.length; i++){
      cardsP.push(new Card("Patek Philippe "+data.PatekPhilippe.models[i].name, data.PatekPhilippe.models[i].image_url, data.PatekPhilippe.models[i].price, " ", data.PatekPhilippe.models[i].productUrl));
    }
    this.cardsPatek = cardsP;
  }


}



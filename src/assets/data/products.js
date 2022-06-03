import { MladiSir, SrednjiSir, StariSir, DimljeniSir, Kackavalj, Kackavalj2, Kajmak, KMleko, Surutka, Jogurt, VocniJogurt, Kobasice, Kulen, Salama, Sunka, Jaretina, Ovcetina, Kozetina, Luk, Krastavac, Paradajz, Kupus, Zelena, Cvekla } from './images';

const products = {
  large_products: [
    {
      cat_id: "ct1",
      cat_desc: "cd1",
      items: [{
        t_id: "c1t1",
        d_id: "c1d1",
        img: MladiSir
        },{
        t_id: "c1t2",
        d_id: "c1d2",
        img: SrednjiSir
        },{
        t_id: "c1t3",
        d_id: "c1d3",
        img: StariSir
        },{
        t_id: "c1t4",
        d_id: "c1d4",
        img: Kackavalj
        },{
        t_id: "c1t5",
        d_id: "c1d5",
        img: Kackavalj2
        },{
        t_id: "c1t6",
        d_id: "c1d6",
        img: DimljeniSir
        },{
        t_id: "c1t7",
        d_id: "c1d7",
        img: Kajmak
        }
      ]
    }
  ],
  small_products: [
    {
      cat_id: "ct2",
      cat_desc: "cd2",
      items: [{
        t_id: "c2t1",
        img: KMleko
        },{
        t_id: "c2t2",
        img: Jogurt
        },{
        t_id: "c2t3",
        img: Surutka
        },{
        t_id: "c2t4",
        img: VocniJogurt
        }]
    },
    {
      cat_id: "ct3",
      cat_desc: "cd3",
      items: [{
        t_id: "c3t1",
        img: Kobasice
        },{
        t_id: "c3t2",
        img: Kulen
        },{
        t_id: "c3t3",
        img: Salama
        },{
        t_id: "c3t4",
        img: Sunka
        },{
        t_id: "c3t5",
        img: Kozetina
        },{
        t_id: "c3t6",
        img: Ovcetina
        },{
        t_id: "c3t7",
        img: Jaretina
        }]
    },
    {
      cat_id: "ct4",
      cat_desc: "cd4",
      items: [{
        t_id: "c4t1",
        img: Luk
        },{
        t_id: "c4t2",
        img: Krastavac
        },{
        t_id: "c4t3",
        img: Paradajz
        },{
        t_id: "c4t4",
        img: Kupus
        },{
        t_id: "c4t5",
        img: Zelena
        },{
        t_id: "c4t6",
        img: Cvekla
        }]
    }
  ]
}

export default products;

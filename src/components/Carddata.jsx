const Fooddata = [
    {
        id: 1,
        rname: "Massala Theoryy",
        imgdata: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        address: "North Indian, Biryani, Mughlai",
        delimg: "https://cdn-icons.flaticon.com/png/512/3258/premium/3258504.png?token=exp=1659000965~hmac=3bbc85ead76f548107358a06e7c72238",
        somedata: " 1175 + order placed from here recently",
        price: "₹350 for one",
        rating: "3.8",
        arrimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnr-vCSh1zzEP5kXAOj0Wj73VeS7sYYLsMdw&usqp=CAU"
    },
    {
        id: 2,
        rname: "Jugaadi Adda",
        imgdata: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        address: "Street Food",
        delimg: "https://cdn-icons.flaticon.com/png/512/2268/premium/2268558.png?token=exp=1659000965~hmac=17ad19d08485154aca852fc03d9260f7",
        somedata: " 2525 + order placed from here recently",
        price: "₹25 for one",
        rating: "3.9",
        arrimg: "https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993"
    },
    {
        id: 3,
        rname: "La Milano Pizzeria",
        imgdata: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        address: "Pizza, Fast Food, Pasta",
        delimg: "https://cdn-icons-png.flaticon.com/512/2331/2331980.png",
        somedata: " 650 + order placed from here recently",
        price: "₹70 for one",
        rating: "4.2",
        arrimg: "https://indiaaheadnews.com/wp-content/uploads/2021/04/Zomato-Logo-Source_-Official-Twitter-Handle-1.jpg"
    },
    {
        id: 4,
        rname: "Momoman",
        imgdata: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "Momos",
        delimg: "https://cdn-icons.flaticon.com/png/512/6188/premium/6188592.png?token=exp=1659000965~hmac=79c2ec3e686b103e51f89908c8130f41",
        somedata: " 300 + order placed from here recently",
        price: "₹70 for one",
        rating: "3.8",
        arrimg: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
    },
    {
        id: 5,
        rname: "Jassi De Parathe",
        imgdata: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "North Indian",
        delimg: "https://cdn-icons-png.flaticon.com/512/3176/3176371.png",
        somedata: "1050 + order placed from here recently",
        price: "₹210 for one",
        rating: "4.0",
        arrimg: "https://static.wixstatic.com/media/46e5d9_aae903803c0f4008aedbcbdbf9923d43~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/450120639.png"
    },
    {
        id: 6,
        rname: "Anjoy Latenight Meals",
        imgdata: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "Wraps FastFood, Chines",
        delimg: "https://cdn-icons-png.flaticon.com/512/3176/3176302.png",
        somedata: " 1100 + order placed from here recently",
        price: "₹100 for one",
        rating: "3.8",
        arrimg: "https://indiaaheadnews.com/wp-content/uploads/2021/04/Zomato-Logo-Source_-Official-Twitter-Handle-1.jpg"
    },
    {
        id: 7,
        rname: "Hocco Eatery",
        imgdata: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        address: "North Indian, Fast Food",
        delimg: "https://cdn-icons-png.flaticon.com/512/2331/2331976.png",
        somedata: "500 + order placed from here recently",
        price: "₹300 for one",
        rating: "3.8",
        arrimg: "https://static.wixstatic.com/media/46e5d9_aae903803c0f4008aedbcbdbf9923d43~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/450120639.png"
    },
    {
        id: 8,
        rname: "Chai Wai",
        imgdata: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
        address: "Tea, Coffee, Shake, Beverages",
        delimg: "https://cdn-icons-png.flaticon.com/512/3260/3260734.png",
        somedata: "500 + order placed from here recently",
        price: "₹100 for one",
        rating: "3.2",
        arrimg: "https://indiaaheadnews.com/wp-content/uploads/2021/04/Zomato-Logo-Source_-Official-Twitter-Handle-1.jpg"
    },
    {
        id: 9,
        rname: "HL Frankie",
        imgdata: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        address: "Burger, Sandwich, Fast Food",
        delimg: "https://cdn-icons.flaticon.com/png/512/3652/premium/3652572.png?token=exp=1659000965~hmac=88ea224fc8c2d1dbab0e0645e542b5c3",
        somedata: "2525 + order placed from here recently",
        price: "₹100 for one",
        rating: "3.8",
        arrimg: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
    },
];

export default Fooddata;
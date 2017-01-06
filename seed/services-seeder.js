/**
 * Created by TEST on 1/1/2017.
 */
var Service = require('../models/service');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var uri = 'mongodb://davetorrente:whaepekk@ds151068.mlab.com:51068/musicservices';
mongoose.connect(uri);
//mongoose.connect('localhost:27017/musicServices');
var services = [
    new Service({
        imagePath1: '/images/band_1.jpg',
        imagePath2: '/images/band_2.jpg',
        imagePath3: '/images/band_3.jpg',
        imagePath4: '/images/band_4.jpg',
        title: 'Live Band',
        description1: "The We Play Music's band is an exhilarating live act renowned for their explosive interactive performances at events across the universe. With an unrivaled reputation for ensuring that each performance remains totally unique, the band takes your live music experience to the next level. The combination of talented and flamboyant musicians, mixed with dynamic and breathtaking vocalists, ensures that each event is about more than just the music.",
        description2: "Exceptional production qualities and elegant stage sets combine with an energy and dynamism that is truly rare in live performance, to create an exceptional entertainment concept.",
        price: 'Hourly Rates: $ 200 - $ 700'
    }),
    new Service({
        imagePath1: '/images/dj_1.jpg',
        imagePath2: '/images/dj_2.jpg',
        imagePath3: '/images/dj_3.jpg',
        imagePath4: '/images/dj_4.jpg',
        title: 'Live Dj',
        description1: "We pioneered a concept, and the industry adored it. We Play Music's live DJ is a high-energy fusion of exquisite singers and explosive musicians, accompanied by top club DJs, and performing a repertoire including everything from funk and Motown to 90s dance anthems and modern chart hits. Featuring sax, electronic violin, and LED percussion, this act never fails to bring a fresh and imaginative twist to live music at every event. This concept simply can't be replicated because it boasts some of the most acclaimed musicians and vocalists currently working today as an integral part of the act.",
        description2: "DJ-Live is brought to life by spectacular set design, bespoke staging, and flawless lighting, to create a jaw-dropping spectacle.",
        price: 'Hourly Rates: $ 100 - $ 700'
    }),
    new Service({
        imagePath1: '/images/prod_1.jpg',
        imagePath2: '/images/prod_2.jpg',
        imagePath3: '/images/prod_3.jpg',
        title: 'Production',
        description1: "Let We Play Music produce your event. From draping and set building to decor lighting and furniture installation, we transform concepts into realities. We have amassed a supremely dedicated team of designers, event managers, and technical crew aht are unique for both their talent and their professionalism.",
        description2: "For our private clients, we specialized in bespoke multi-level stages, eye-catching dancefloors and groundbreaking lighting design. And for our corporate clients, we provide specialist sound, lighting and AV support to a whole host of challenging and complicated corporate environments. We will make your dream come to life.",
        price: 'Hourly Rates: $ 500 - $ 5000'
    }),
];
var done = 0;
for (var i = 0; i < services.length; i++) {
    services[i].save(function(err, result) {
        done++
        if (done === services.length) {
            exit();
        }
    });
}
function exit() {
  mongoose.disconnect();
}

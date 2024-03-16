const ViewData=[
    {
      title:"الُقُرْآن الْكَرِيْم",
      id:"qraan",
      description:`
      الُقُرْآن الْكَرِيْم من افضل المواقع اللي يوفر مجموعة (APIs)   يحتوي على كافة البينات حول الُقُرْآن الْكَرِيْم , و يوفر مجموعة من البيانات حول المصحف  مثل عدد الايآت, السور ,مواضع السجود......
  ويوفر ايضاً ملفات (MP3) بالسورة و الاية. لمجموعة من المقرئين .
  ....موقع ممتاز وجَزَاهم اللَّةُ خيراً.
      `,
      webLink:"https://alquran.cloud/api",
      data_json :[
        {
         title:"بينات عن القران",
         path:"https://api.alquran.cloud/v1/meta"
       },
        {
         title:" السور mp3",
         path:"https://cdn.islamic.network/quran/audio-surah/128/ar.abdullahbasfar/1.mp3"
       },
        {
         title:"الايات mp3",
         path:"https://cdn.islamic.network/quran/audio/128/ar.shaatree/262.mp3"
       },
        {
         title:"ايات السجود",
         path:"http://api.alquran.cloud/v1/sajda/quran-uthmani"
       },
        {
         title:" المقرئين  للسور" ,
         path:"https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json"
       },
        {
         title:" المقرئين  للايات" ,
         path:"http://api.alquran.cloud/v1/edition/format/audio"
       },
       ]
     
    },
    {
      title: ` المكتبة الصوتية الُقُرْآن الْكَرِيْم  ` ,
      id:"qraan2",
      description:`
      موقع المكتبة الصوتية يقدم مجموعة من (API)   حول القران الكريم, مثل معلومات عن السور,الاذاعة, فيديوهات,تفسير mp3 , رويات,تدبر mp3 , ....موقع ممتاز وجَزَاهم اللَّةُ خيراً.
  
      `,
      webLink:`https://mp3quran.net/ar/api`,
      data_json :[
        {
         title:"اللغات",
         path:"https://mp3quran.net/api/v3/languages"
       },
        {
         title:"ازاعة",
         path:"https://mp3quran.net/api/v3/radios"
       },
        {
         title:"قائمة بسور القران",
         path:"https://www.mp3quran.net/api/v3/ayat_timing/soar?read=1"
       },
        {
         title:"فيديوهات",
         path:"https://mp3quran.net/api/v3/videos"
       },
        {
         title:"تفسير mp3",
         path:"https://www.mp3quran.net/api/v3/tafsir?tafsir=1&language=ar"
       },
        {
         title:"mp4 تدبر",
         path:"https://mp3quran.net/api/v3/tadabor"
       },
        {
         title:"معلومات عن السور" ,
         path:"https://www.mp3quran.net/api/v3/suwar?language=ar"
       },
        {
         title:"الرويات" ,
         path:"https://www.mp3quran.net/api/v3/riwayat?language=ar"
       },
        {
         title:"المقراين" ,
         path:"https://www.mp3quran.net/api/v3/reciters?language=ar"
       },
       ]
     
    },
    {
      title:"كتب ",
      id:"book",
      description:`
  يقدم كتب وبعض البيانات عنها مثل الاسم,وصف,صورة,التقييم...ات
      `,
      webLink:"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=58I7HDT2DYboz8TAfRPpnJUDOGrHGBjw#",
      data_json :[
        {
         title:" بيانات عن كتب ",
         path:`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=58I7HDT2DYboz8TAfRPpnJUDOGrHGBjw#`
       },

     
       ]
    },
    {
      title:"News API",
      id:"news",
      description:`
      يعيد ( 5 APIs ) تحتوى على اخبار ومقالات عالمية . بالاضافة الى معرفة موقع المقال وعناوين الاخبار العاجلة من مصادر الاخبار والمدونات.... وعشان تستخدمة لازم تسجل في الموقع عشان يوفرك (API Key )   وهنا رابط مباشر للملفات بالمفتاح..
      `,
      webLink:"https://newsapi.org/",
      data_json :[
        {
         title:"جميع المقالات التي نشرتها صحيفة وول ستريت جورنال",
         path:"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d882f947d8c24d08b10c8c38268fd034"
       },
        {
         title:"أهم العناوين من TechCrunch",
         path:"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d882f947d8c24d08b10c8c38268fd034 "
       },
        {
         title: "أهم عناوين الأعمال في الولايات المتحدة ",
         path:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d882f947d8c24d08b10c8c38268fd034"
       },
        {
         title:" جميع المقالات حول تسلا  ",
         path:"https://newsapi.org/v2/everything?q=tesla&from=2024-02-15&sortBy=publishedAt&apiKey=d882f947d8c24d08b10c8c38268fd034"
       },
        {
         title:"  جميع المقالات التي تشير إلى شركة Apple  ",
         path:"https://newsapi.org/v2/everything?q=apple&from=2024-03-14&to=2024-03-14&sortBy=popularity&apiKey=d882f947d8c24d08b10c8c38268fd034"
       },
     
       ]
    },
    {
      title:"{JSON} Placeholder",
      id:"post",
      description:`
      يقدم بينات عن المستخدمين ومنشورات وكل مستخدم بيكون لية (id , email , address….)  . وبيوفر مجموعة صور!!! او حاجة زي الصور هي عبارة عن مربع واخد خلفية بلون معين بس...
      `,
      webLink:"https://jsonplaceholder.typicode.com/",
      data_json :[
       
        
        {
         title:"منشور" ,
         path:"https://jsonplaceholder.typicode.com/posts"
       },
        {
         title:"تعليقات" ,
         path:"https://jsonplaceholder.typicode.com/comments"
       },
        {
         title:"مستخدمين" ,
         path:"https://jsonplaceholder.typicode.com/users"
       },
       ]
    },
    {
      title:"Reqres",
      id:"users",
      description:`يعيد ملف JSON  يحتوي على عدد من المستخدمين لكل مستخدم (ID , Email , First/Last Name , avatar/image) . وممكن تعيد بينات اي مستخدم عن طريق ID ...`,
      webLink:`https://reqres.in/`,
      data_json :[
        {
         title:"  اول صفحة من المستخدمين " ,
         path:" https://reqres.in/api/users?page=1  "
       },
        {
         title:"المستخدم id = 2" ,
         path:"https://reqres.in/api/users/2"
       },
       ]
    },
    {
      title:"Gamerpower",
      id:"games",
      description:` يعيد بينات عن الالعاب مثل الاسم, وصف , صورة و رابط لتشغيل اللعبة ....  `,
      webLink:`https://www.gamerpower.com/api-read
      `,
      data_json :[
        {
         title:"العاب JSON" ,
         path:`https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity`
       },
       ]
    },
    {
      title:"Platzi Fake Store API",
      id:"shop_1",
      description:` لو عاوز تعمل متجر الكتروني . فالموقع ده .  بيوفر مجموعة من المنتجات ولكل منتج الاسم و السعر و التصنيف ,وصف للمنتج وصور خاصة بالمنتج .....بالاضافة الى مستخدمين.. `,
      webLink:`https://fakeapi.platzi.com/en/rest/categories/ `,
      data_json :[
        {
         title:"منتجات متنوعة" ,
         path:`https://api.escuelajs.co/api/v1/products`
       },
        {
         title:"تصنيفات" ,
         path:"https://api.escuelajs.co/api/v1/categories"
       },
        {
         title:"مستخدمين " ,
         path:"https://api.escuelajs.co/api/v1/users"
       },
       ]
    },
    {
      title:" Dummy Json    ",
      id:"shop_2",
      description:` لو عاوز تعمل متجر الكتروني . فالموقع ده .  بيوفر مجموعة من المنتجات ولكل منتج الاسم و السعر و التصنيف ,وصف للمنتج وصور خاصة بالمنتج .....بالاضافة الى مستخدمين..`,
      webLink:`https://dummyjson.com/docs/products`,
      data_json :[
        {
         title:"منتجات متنوعة" ,
         path:`https://dummyjson.com/products`
       },
        {
         title:"عربة التسوق" ,
         path:"https://dummyjson.com/carts"
       },
        {
         title:"وصفات طعام" ,
         path:"https://dummyjson.com/recipes"
       },
        {
         title:"مستخدمين" ,
         path:"https://dummyjson.com/users"
       },
        {
         title:"منشورات" ,
         path:"https://dummyjson.com/posts"
       },
        {
         title:"اقتباس" ,
         path:"https://dummyjson.com/quotes"
       },
        {
         title:"todos" ,
         path:"https://dummyjson.com/todos"
       },
        {
         title:"تعليقات" ,
         path:"https://dummyjson.com/comments"
       },
       ]
    },
    {
      title:" Fake Store Api  ",
      id:"shop_3",
      description:`  لو عاوز تعمل متجر الكتروني . فالموقع ده .  بيوفر مجموعة من المنتجات ولكل منتج الاسم و السعر و التصنيف ,وصف للمنتج وصور خاصة بالمنتج .....بالاضافة الى مستخدمين.. `,
      webLink:`https://fakestoreapi.com/docs`,
      data_json :[
        {
         title:"منتجات ملابس" ,
         path:`https://fakestoreapi.com/products`
       },
        {
         title:"عربة التسوق" ,
         path:"https://fakestoreapi.com/carts"
       },
        {
         title:"المستخدمين" ,
         path:"https://fakestoreapi.com/users"
       },
       ]
    },
    {
      title:"Jobicy",
      id:"freejop",
      description:`  يتيح الوصول الى قوائم العمل الحر من مجموعة متنوعة من الصناعات والشركات. وممكن ترجع البينات حسب البلد اةو الوظيفة .... `,
      webLink:`https://jobicy.com/jobs-rss-feed#section1`,
      data_json :[
        {
         title:" عمل حر" ,
         path:`https://jobicy.com/api/v2/remote-jobs`
       },
        
       ]
    },
    {
      title:"   Random Fox  ",
      id:"images",
      description:` 
      هنا معايا (3 APIs)  : 
      الاول:  صورة ثعلب عشوائية في كل مرة.  
      الثاني:  بحدد عدد الصور اللي عوزها ترجع في كل مرة  عشواي . 
      الثالث : صورة متحركة تعبر عن  نعم / لا .
      `,
      webLink:`https://randomfox.ca/`,
      data_json :[
        {
         title:"مولد صور عشوائية" ,
         path:`https://shibe.online/api/shibes?count=10`
       },
        {
         title:"صور ثعالب" ,
         path:"https://randomfox.ca/floof/"
       },
        {
         title:"صورة متحركة" ,
         path:"https://yesno.wtf/api"
       },
       ]
    },
]
export default ViewData



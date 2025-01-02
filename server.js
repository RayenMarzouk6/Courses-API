const express = require("express");
const app = express();
const port = 3000;

// JSON Data
const courses = [
  {
    "id": 1,
    "name": "Apprendre JavaScript",
    "description": "Un cours complet sur les bases du JavaScript pour les débutants.",
    "duration": "4 heures",
    "level": "Débutant",
    "category": "Développement Web",
    "image": "https://th.bing.com/th/id/OIP.zGtB9WyPaKOzVKsxzI_NlAHaEo?rs=1&pid=ImgDetMain",
    "link" : "https://rr4---sn-4g5e6nzl.googlevideo.com/videoplayback?expire=1735751754&ei=6iN1Z-G_DdWhsfIPrtDhoQM&ip=198.55.106.96&id=o-AMViVw9He9WnFWzXS00P5TmENZXLLN6sFN7h7ey5dhDc&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AfMhrI_mnAGf6WfMgJ8WDFJhNUNkGZstQpGG16se__A166C82jAxVzUXQp1iFfHjArKyLWCt95ZhJjup&vprv=1&svpuc=1&mime=video%2Fmp4&ns=AQLrbxfu5F8vPoXvRFAcDD8Q&rqh=1&cnr=14&ratebypass=yes&dur=362.300&lmt=1697633796721950&fexp=24350302,24350590,24350737,24350827,24350851,51326932,51331020,51335594,51371294&c=MWEB&sefc=1&txp=5318224&n=WzcVOH_jSafB5Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAMPz6TnLEp-HGItwApkBoIOOOxr7_OU2VGL04ODrS8AnAiEA2aKCt6H3lP9M7cfW04qptS8WsanseucPKb6bqMXcfo8%3D&pot=MkipSWwU3-8bB6l1WGXPEAQBOkWRnLczneYo3VomPfrT-DlQ3UbuCBsqCFzYp4V5lPge1QEGOHaWrx91BerfZGLS9mYQ5EzPkw8%3D&title=Apprendre%20JavaScript%20en%20juste%205%20MINUTES%20(2024)&rm=sn-a5mel77l&rrc=104,80&req_id=ef7cbe686aeba3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-uv2oxuuo-u0ol7l&cms_redirect=yes&cmsv=e&met=1735730184,&mh=84&mip=102.158.148.254&mm=29&mn=sn-4g5e6nzl&ms=rdu&mt=1735729981&mv=m&mvi=4&pl=17&rms=rdu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgdxggOzT8tAAO4giF5oxqk31e1dQbawykrq-_7ms6_y0CICerAkgI3oD1J_ZnJY8rgj2mIhAcC69TEkUD57iDUZgv" ,
    "instructor": {
      "id": 105,
      "name": "Sophie Durand",
      "bio": "Développeuse JavaScript et formatrice.",
      "avatar": "https://th.bing.com/th/id/R.c5450ec44d4e5a35f727ba0a188c47c4?rik=0JWM1aj88Fh8ZQ&riu=http%3a%2f%2fvisualclassrooms.com%2fimages%2fabout%2fs_454913800.jpg&ehk=RbCFWWMA0Y%2bFUy8zNVE5%2fNAA8Cx%2fB3HNgOwfLXcD0vo%3d&risl=&pid=ImgRaw&r=0"
    },
    "price": 24.99,
    "language": "spanish",
    "enrollment_count": 1800,
    "ratings": 4.6,
  },
  {
    "id": 2,
    "name": "Vue.js pour les débutants",
    "description": "Apprenez à développer avec Vue.js, un framework JavaScript populaire.",
    "duration": "6 heures",
    "level": "Débutant",
    "category": "Développement Web",
    "image": "https://th.bing.com/th/id/R.1d585b6fb75b1b3a4f2f682d3572950a?rik=pCEQ%2f%2fIjm4QPTQ&pid=ImgRaw&r=0",
    "link" : "https://rr4---sn-4g5e6nzl.googlevideo.com/videoplayback?expire=1735751754&ei=6iN1Z-G_DdWhsfIPrtDhoQM&ip=198.55.106.96&id=o-AMViVw9He9WnFWzXS00P5TmENZXLLN6sFN7h7ey5dhDc&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AfMhrI_mnAGf6WfMgJ8WDFJhNUNkGZstQpGG16se__A166C82jAxVzUXQp1iFfHjArKyLWCt95ZhJjup&vprv=1&svpuc=1&mime=video%2Fmp4&ns=AQLrbxfu5F8vPoXvRFAcDD8Q&rqh=1&cnr=14&ratebypass=yes&dur=362.300&lmt=1697633796721950&fexp=24350302,24350590,24350737,24350827,24350851,51326932,51331020,51335594,51371294&c=MWEB&sefc=1&txp=5318224&n=WzcVOH_jSafB5Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAMPz6TnLEp-HGItwApkBoIOOOxr7_OU2VGL04ODrS8AnAiEA2aKCt6H3lP9M7cfW04qptS8WsanseucPKb6bqMXcfo8%3D&pot=MkipSWwU3-8bB6l1WGXPEAQBOkWRnLczneYo3VomPfrT-DlQ3UbuCBsqCFzYp4V5lPge1QEGOHaWrx91BerfZGLS9mYQ5EzPkw8%3D&title=Apprendre%20JavaScript%20en%20juste%205%20MINUTES%20(2024)&rm=sn-a5mel77l&rrc=104,80&req_id=ef7cbe686aeba3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-uv2oxuuo-u0ol7l&cms_redirect=yes&cmsv=e&met=1735730184,&mh=84&mip=102.158.148.254&mm=29&mn=sn-4g5e6nzl&ms=rdu&mt=1735729981&mv=m&mvi=4&pl=17&rms=rdu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgdxggOzT8tAAO4giF5oxqk31e1dQbawykrq-_7ms6_y0CICerAkgI3oD1J_ZnJY8rgj2mIhAcC69TEkUD57iDUZgv" ,
    "instructor": {
      "id": 106,
      "name": "Nicolas Pires",
      "bio": "Développeur front-end et expert en Vue.js.",
      "avatar": "https://media.licdn.com/dms/image/C4E12AQEferJCQqzRhg/article-cover_image-shrink_720_1280/0/1635437716485?e=2147483647&v=beta&t=a41TKlyAqWhMH-F6dxXdHcstFO14GjEyOdF5hSIyjS8"
    },
    "price": 39.99,
    "language": "english",
    "enrollment_count": 2200,
    "ratings": 4.7,
  },
  {
    "id": 3,
    "name": "SQL pour débutants",
    "description": "Comprendre les bases des bases de données relationnelles avec SQL.",
    "duration": "4 heures",
    "level": "Débutant",
    "category": "Base de données",
    "image": "https://s3.amazonaws.com/freecodecamp/news-sql-full-course.jpg",
    "link" : "https://rr4---sn-4g5e6nzl.googlevideo.com/videoplayback?expire=1735751754&ei=6iN1Z-G_DdWhsfIPrtDhoQM&ip=198.55.106.96&id=o-AMViVw9He9WnFWzXS00P5TmENZXLLN6sFN7h7ey5dhDc&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AfMhrI_mnAGf6WfMgJ8WDFJhNUNkGZstQpGG16se__A166C82jAxVzUXQp1iFfHjArKyLWCt95ZhJjup&vprv=1&svpuc=1&mime=video%2Fmp4&ns=AQLrbxfu5F8vPoXvRFAcDD8Q&rqh=1&cnr=14&ratebypass=yes&dur=362.300&lmt=1697633796721950&fexp=24350302,24350590,24350737,24350827,24350851,51326932,51331020,51335594,51371294&c=MWEB&sefc=1&txp=5318224&n=WzcVOH_jSafB5Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAMPz6TnLEp-HGItwApkBoIOOOxr7_OU2VGL04ODrS8AnAiEA2aKCt6H3lP9M7cfW04qptS8WsanseucPKb6bqMXcfo8%3D&pot=MkipSWwU3-8bB6l1WGXPEAQBOkWRnLczneYo3VomPfrT-DlQ3UbuCBsqCFzYp4V5lPge1QEGOHaWrx91BerfZGLS9mYQ5EzPkw8%3D&title=Apprendre%20JavaScript%20en%20juste%205%20MINUTES%20(2024)&rm=sn-a5mel77l&rrc=104,80&req_id=ef7cbe686aeba3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-uv2oxuuo-u0ol7l&cms_redirect=yes&cmsv=e&met=1735730184,&mh=84&mip=102.158.148.254&mm=29&mn=sn-4g5e6nzl&ms=rdu&mt=1735729981&mv=m&mvi=4&pl=17&rms=rdu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgdxggOzT8tAAO4giF5oxqk31e1dQbawykrq-_7ms6_y0CICerAkgI3oD1J_ZnJY8rgj2mIhAcC69TEkUD57iDUZgv" ,
    "instructor": {
      "id": 107,
      "name": "Cécile Bellamy",
      "bio": "Spécialiste des bases de données et formatrice en SQL.",
      "avatar": "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/2147533649/images/766a7c2-c24-3372-1d23-7f3dbf414e8_Capitalize_on_down_job_market.jpg"
    },
    "price": 29.99,
    "language": "Français",
    "enrollment_count": 2500,
    "ratings": 4.8,
  },



  {
    "id": 4,
    "name": "Python pour la Data Science",
    "description": "Apprenez les bases de Python pour analyser et visualiser des données.",
    "duration": "8 heures",
    "level": "Intermédiaire",
    "category": "Data Science",
    "image": "https://th.bing.com/th/id/R.946b3df46bd294740a05888889f53a6d?rik=cWz5T37AaSDqcQ&pid=ImgRaw&r=0",
    "link": "",
    "instructor": {
      "id": 108,
      "name": "Julien Lambert",
      "bio": "Expert en Data Science et Machine Learning.",
      "avatar": "https://th.bing.com/th/id/OIP.gU0RR47rY_n7IXUnlCN3NwHaHa?rs=1&pid=ImgDetMain"
    },
    "price": 49.99,
    "language": "Français",
    "enrollment_count": 3200,
    "ratings": 4.9
  },
  {
    "id": 5,
    "name": "Introduction au Machine Learning",
    "description": "Découvrez les concepts fondamentaux du Machine Learning.",
    "duration": "6 heures",
    "level": "Débutant",
    "category": "Intelligence Artificielle",
    "image": "https://media.geeksforgeeks.org/wp-content/uploads/20230706133033/An-introduction-to-Machine-Learning-01.webp",
    "link": "https://www.bing.com/videos/search?q=machine+learning&FORM=HDRSC6",
    "instructor": {
      "id": 109,
      "name": "Alice Martin",
      "bio": "Chercheuse en Intelligence Artificielle et formatrice.",
      "avatar": "https://static.wixstatic.com/media/c3401269172848ea9a1b42592f2fc6a1.jpg/v1/fill/w_332,h_317,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Young%20Teacher.jpg"
    },
    "price": 59.99,
    "language": "Français",
    "enrollment_count": 2800,
    "ratings": 4.7
  },
  {
    "id": 6,
    "name": "React Native",
    "description": "Maîtrisez la création d'applications mobiles avec React Native.",
    "duration": "10 heures",
    "level": "Avancé",
    "category": "Développement Mobile",
    "image": "https://th.bing.com/th/id/R.0a9a95fdc90974ee9baeec91d3d8e164?rik=fm8eUJ066m9hHQ&pid=ImgRaw&r=0",
    "link": "https://www.bing.com/videos/search?q=React+Native&FORM=HDRSC6",
    "instructor": {
      "id": 110,
      "name": "Marc Dupont",
      "bio": "Développeur mobile spécialisé en React Native.",
      "avatar": "https://thumbs.dreamstime.com/b/portrait-female-primary-elementary-school-teacher-holding-digital-tablet-standing-classroom-portrait-female-primary-319036060.jpg"
    },
    "price": 69.99,
    "language": "Français",
    "enrollment_count": 1500,
    "ratings": 4.5
  },
  {
    "id": 7,
    "name": "WordPress pour débutants",
    "description": "Apprenez à créer et gérer un site web avec WordPress.",
    "duration": "5 heures",
    "level": "Débutant",
    "category": "Développement Web",
    "image": "https://blog.servicioshosting.com/wp-content/uploads/2017/07/logo-wordpress-2.jpg",
    "link": "https://www.bing.com/videos/search?q=WordPress&FORM=HDRSC6",
    "instructor": {
      "id": 111,
      "name": "Claire Fournier",
      "bio": "Consultante web et formatrice WordPress.",
      "avatar": "https://randomuser.me/api/portraits/women/36.jpg"
    },
    "price": 19.99,
    "language": "english",
    "enrollment_count": 4000,
    "ratings": 4.4
  },
  {
    "id": 8,
    "name": "UI/UX Design pour les débutants",
    "description": "Découvrez les principes de base du design d'expérience utilisateur.",
    "duration": "7 heures",
    "level": "Débutant",
    "category": "Design",
    "image": "https://th.bing.com/th/id/R.652c19e0750c58a674f34a1eaab867c5?rik=5vnKe%2blP%2fcOwiw&pid=ImgRaw&r=0",
    "link": "https://www.bing.com/videos/search?q=UI%2fUX+course&FORM=HDRSC6",
    "instructor": {
      "id": 112,
      "name": "Paul Girard",
      "bio": "Designer UI/UX avec plus de 10 ans d'expérience.",
      "avatar": "https://img.freepik.com/premium-photo/woman-hijab-with-smile-her-face_662214-597934.jpg"
    },
    "price": 39.99,
    "language": "Français",
    "enrollment_count": 1700,
    "ratings": 4.6
  },
    {
      "id": 9,
      "name": "Introduction au Big Data",
      "description": "Découvrez les concepts clés du Big Data et apprenez à analyser de grandes quantités de données.",
      "duration": "5 heures",
      "level": "Intermédiaire",
      "category": "Data Science",
      "image": "https://th.bing.com/th/id/OIP.MsVUVkLkW_2nINjxpkjpHAHaEK?rs=1&pid=ImgDetMain",
      "link": "https://www.bing.com/videos/search?q=Big+Data&FORM=HDRSC6",
      "instructor": {
        "id": 108,
        "name": "Martin Gauthier",
        "bio": "Data Scientist avec 10 ans d'expérience en Big Data.",
        "avatar": "https://static.vecteezy.com/system/resources/previews/032/701/036/large_2x/beautiful-young-arab-muslim-model-woman-wearing-hijab-ai-generative-free-photo.jpg"
      },
      "price": 49.99,
      "language": "Français",
      "enrollment_count": 3000,
      "ratings": 4.7
    },
    {
      "id": 10,
      "name": "Maîtriser le CSS",
      "description": "Un cours complet pour maîtriser les styles web et créer des sites attrayants.",
      "duration": "6 heures",
      "level": "Débutant",
      "category": "Développement Web",
      "image": "https://th.bing.com/th/id/R.82fb63828745b2e90f2cd0270fc8fe71?rik=s1HJv1h4gHmwnA&riu=http%3a%2f%2ftechnology365blogs.weebly.com%2fuploads%2f1%2f4%2f2%2f7%2f142711060%2f21-07-css_orig.jpg&ehk=QJRud6aUOWeVGpR%2f72okSzovObY1tHvLdmtb%2bnzRXNY%3d&risl=&pid=ImgRaw&r=0",
      "link": "https://www.bing.com/videos/search?q=CSS&FORM=HDRSC6",
      "instructor": {
        "id": 109,
        "name": "Alice Laurent",
        "bio": "Développeuse web spécialisée en front-end.",
        "avatar": "https://www.apostilleservices.com/wp-content/uploads/2020/01/Teaching-License-Apostille.jpg"
      },
      "price": 19.99,
      "language": "Français",
      "enrollment_count": 5000,
      "ratings": 4.9
    },
    {
      "id": 11,
      "name": "Les bases de TypeScript",
      "description": "Apprenez à utiliser TypeScript pour améliorer vos projets JavaScript.",
      "duration": "7 heures",
      "level": "Intermédiaire",
      "category": "Développement Web",
      "image": "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png",
      "link": "https://www.bing.com/videos/search?q=TypeScript&FORM=HDRSC6",
      "instructor": {
        "id": 110,
        "name": "Paul Bernard",
        "bio": "Développeur full-stack avec expertise en TypeScript.",
        "avatar": "https://www.nr.edu/images/careers/education.jpg"
      },
      "price": 34.99,
      "language": "Français",
      "enrollment_count": 3200,
      "ratings": 4.8
    },
    {
      "id": 12,
      "name": "Développement Android pour débutants",
      "description": "Créez vos propres applications Android avec ce cours complet.",
      "duration": "10 heures",
      "level": "Débutant",
      "category": "Développement Mobile",
      "image": "https://imgeng.jagran.com/images/2023/sep/Google%20Android%20Logo1693974048059.jpg",
      "link": "https://www.bing.com/videos/search?q=Android&FORM=HDRSC6",
      "instructor": {
        "id": 111,
        "name": "Claire Petit",
        "bio": "Développeuse mobile passionnée par Android.",
        "avatar": "https://t4.ftcdn.net/jpg/02/22/82/81/360_F_222828173_1usdjRG6tqtYKgklGHtGaVPcWflg3K9v.jpg"
      },
      "price": 39.99,
      "language": "Français",
      "enrollment_count": 2000,
      "ratings": 4.6
    },
    {
      "id": 13,
      "name": "Découvrir Hadoop",
      "description": "Introduction à Hadoop, un framework pour traiter de grandes quantités de données.",
      "duration": "6 heures",
      "level": "Intermédiaire",
      "category": "Big Data",
      "image": "https://preferhub.com/wp-content/uploads/2022/03/hadoop.jpg",
      "link": "https://www.bing.com/videos/search?q=Hadoop&FORM=HDRSC6",
      "instructor": {
        "id": 112,
        "name": "Julien Lefevre",
        "bio": "Ingénieur Big Data et expert Hadoop.",
        "avatar": "https://th.bing.com/th/id/OIP.R2ZUfvGs80sT6BC3RekpGwHaHa?rs=1&pid=ImgDetMain"
      },
      "price": 44.99,
      "language": "Français",
      "enrollment_count": 1800,
      "ratings": 4.7
    },
    {
      "id": 14,
      "name": "Introduction à Flutter",
      "description": "Créez des applications multiplateformes avec Flutter.",
      "duration": "8 heures",
      "level": "Débutant",
      "category": "Développement Mobile",
      "image": "https://th.bing.com/th/id/R.d7e789c3b8bcb2b7880dd3b4b1d3edd6?rik=ytog4A4XipK5yA&riu=http%3a%2f%2ftechnobrains.io%2fwp-content%2fuploads%2f2021%2f07%2fflutter-Featured-Blog-Image2.jpg&ehk=qNtlUWmyUkVCjiGvmi7dbdWp32XXAQM3qbdnfOtyuBw%3d&risl=&pid=ImgRaw&r=0",
      "link": "https://www.bing.com/videos/search?q=Flutter&FORM=HDRSC6",
      "instructor": {
        "id": 113,
        "name": "Hélène Dubois",
        "bio": "Développeuse d'applications et formatrice Flutter.",
        "avatar": "https://th.bing.com/th/id/OIP.548xUuWp06chCrAerlyegAHaMC?rs=1&pid=ImgDetMain"
      },
      "price": 49.99,
      "language": "english",
      "enrollment_count": 2400,
      "ratings": 4.8
    } ,

    {
      "id": 15,
      "name": "Développer des APIs avec SOAP",
      "description": "Apprenez à concevoir et implémenter des APIs avec le protocole SOAP.",
      "duration": "6 heures",
      "level": "Intermédiaire",
      "category": "Développement Backend",
      "image": "https://learning.datasoft.ca/pluginfile.php/38/course/overviewfiles/API---SOAP.jpg",
      "link": "https://www.bing.com/videos/search?q=SOAP+course+API&FORM=HDRSC6",
      "instructor": {
        "id": 120,
        "name": "Michel Arnaud",
        "bio": "Ingénieur backend spécialisé en services web.",
        "avatar": "https://s.hdnux.com/photos/01/41/70/25/25658727/3/ratio1x1_640.jpg"
      },
      "price": 29.99,
      "language": "english",
      "enrollment_count": 1500,
      "ratings": 4.5
    },
    {
      "id": 16,
      "name": "Développement Frontend avec HTML5",
      "description": "Un cours complet sur HTML5 pour créer des sites modernes et interactifs.",
      "duration": "5 heures",
      "level": "Débutant",
      "category": "Développement Web",
      "image": "https://th.bing.com/th/id/OIP.aSO9ySS_saOFrE3FkDduagHaEJ?rs=1&pid=ImgDetMain",
      "link": "https://www.bing.com/videos/search?q=HTML5&FORM=HDRSC6",
      "instructor": {
        "id": 121,
        "name": "Sophie Martin",
        "bio": "Développeuse frontend expérimentée.",
        "avatar": "https://www.nwacc.edu/_resources/images/faculty/prof-teaching-mobilehero.jpg"
      },
      "price": 19.99,
      "language": "Français",
      "enrollment_count": 4500,
      "ratings": 4.8
    },
    {
      "id": 17,
      "name": "JavaScript Avancé",
      "description": "Passez à la vitesse supérieure avec JavaScript en explorant des concepts avancés.",
      "duration": "8 heures",
      "level": "Avancé",
      "category": "Développement Web",
      "image": "https://i.ytimg.com/vi/UM3ClbuYmdo/maxresdefault.jpg",
      "link": "https://www.bing.com/videos/search?q=JavaScript+Avanc%c3%a9&FORM=HDRSC6",
      "instructor": {
        "id": 122,
        "name": "Jean Dupont",
        "bio": "Expert JavaScript avec 12 ans d'expérience.",
        "avatar": "https://img.freepik.com/premium-photo/illustration-instructor_931878-219056.jpg"
      },
      "price": 39.99,
      "language": "arabic",
      "enrollment_count": 3200,
      "ratings": 4.9
    },
    {
      "id": 18,
      "name": "SQL et Gestion de Bases de Données",
      "description": "Maîtrisez les bases de données relationnelles avec SQL.",
      "duration": "7 heures",
      "level": "Intermédiaire",
      "category": "Data Science",
      "image": "https://www.lebigdata.fr/wp-content/uploads/2018/01/base-donnees-fonctionnement-1024x576.jpg",
      "link": "https://www.bing.com/videos/search?q=SQL+et+Gestion+de+Bases+de+Donn%c3%a9es&FORM=HDRSC6",
      "instructor": {
        "id": 123,
        "name": "Claire Dubois",
        "bio": "Spécialiste en bases de données et analyste de données.",
        "avatar": "https://cdn9.dissolve.com/p/D2115_185_363/D2115_185_363_1200.jpg"
      },
      "price": 24.99,
      "language": "arabic",
      "enrollment_count": 5200,
      "ratings": 4.7
    },
    {
      "id": 19,
      "name": "Docker pour Développeurs",
      "description": "Apprenez à utiliser Docker pour déployer vos applications de manière efficace.",
      "duration": "6 heures",
      "level": "Intermédiaire",
      "category": "DevOps",
      "image": "https://th.bing.com/th/id/R.a2f46e02ea8f7f8af6c6989687bd6b52?rik=0keMY0UQso%2b1kg&riu=http%3a%2f%2flogz.io%2fwp-content%2fuploads%2f2016%2f01%2fdocker-facebook.png&ehk=vi9I6O3dyq5d2%2bOmy8ZDLrWQv2LbFNVfkFhTEcajShM%3d&risl=&pid=ImgRaw&r=0",
      "link": "https://www.bing.com/videos/search?q=Docker&FORM=HDRSC6",
      "instructor": {
        "id": 124,
        "name": "Rayen Marzouk",
        "bio": "DevOps Engineer avec une expertise en conteneurisation.",
        "avatar": "https://media.licdn.com/dms/image/D4D22AQGFxYbcacvDOw/feedshare-shrink_2048_1536/0/1710324300406?e=2147483647&v=beta&t=QRzfrQx7rUeITUqsWcd-_JemLfSSs1yAJZ2DTP4-LAA"
      },
      "price": 29.99,
      "language": "Français",
      "enrollment_count": 2900,
      "ratings": 4.6
    },
    {
      "id": 20,
      "name": "Les bases de Python",
      "description": "Apprenez Python, un langage polyvalent pour la programmation moderne.",
      "duration": "5 heures",
      "level": "Débutant",
      "category": "Programmation",
      "image": "https://th.bing.com/th/id/OIP.EpCC_LG3a32Dp1rZsMudzAHaEK?rs=1&pid=ImgDetMain",
      "link": "https://www.bing.com/videos/search?q=le+base+Python+&FORM=HDRSC6",
      "instructor": {
        "id": 125,
        "name": "Marie Lemoine",
        "bio": "Développeuse Python et formatrice passionnée.",
        "avatar": "https://www.janets.org.uk/wp-content/uploads/2021/07/IGCSE-Maths-Course.jpg"
      },
      "price": 19.99,
      "language": "Français",
      "enrollment_count": 5800,
      "ratings": 4.9
    },
    {
      "id": 21,
      "name": "Apprendre à utiliser Git",
      "description": "Maîtrisez Git pour la gestion de versions et la collaboration en équipe.",
      "duration": "4 heures",
      "level": "Débutant",
      "category": "DevOps",
      "image": "https://th.bing.com/th/id/R.3f27d1f4db2685df2c6197239b277ea6?rik=CI0D4M703Jnclw&pid=ImgRaw&r=0",
      "link": "https://www.bing.com/videos/search?q=Git&FORM=HDRSC6",
      "instructor": {
        "id": 126,
        "name": "Pierre Martin",
        "bio": "Développeur full-stack et expert Git.",
        "avatar": "https://img.freepik.com/premium-photo/illustration-instructor_931878-172680.jpg"
      },
      "price": 14.99,
      "language": "Français",
      "enrollment_count": 4500,
      "ratings": 4.8
    },
    {
      "id": 22,
      "name": "Découverte de React Native",
      "description": "Créez des applications mobiles avec React Native.",
      "duration": "8 heures",
      "level": "Débutant",
      "category": "Développement Mobile",
      "image": "https://th.bing.com/th/id/R.3e82726e8117df30f3cef080e26e02d4?rik=OBpIek8aPlwBMg&pid=ImgRaw&r=0",
      "link": "https://www.bing.com/videos/search?q=React+Native+avance&FORM=HDRSC6",
      "instructor": {
        "id": 127,
        "name": "Camille Lefevre",
        "bio": "Développeuse mobile et experte React Native.",
        "avatar": "https://img.freepik.com/premium-photo/suave-thinking-handsome-tuxedoed-gent-isolated-transparent-background-png_94628-53363.jpg"
      },
      "price": 34.99,
      "language": "spanish",
      "enrollment_count": 3200,
      "ratings": 4.7
    },
    {
      "id": 23,
      "name": "Développement Backend avec Node.js",
      "description": "Construisez des serveurs robustes avec Node.js.",
      "duration": "7 heures",
      "level": "Intermédiaire",
      "category": "Développement Backend",
      "image": "https://th.bing.com/th/id/R.54e186d74fde950c9611eaedfdad0de7?rik=2cXvJUWfLSwMbA&pid=ImgRaw&r=0",
      "link": "https://www.bing.com/videos/search?q=Node.js&FORM=HDRSC6",
      "instructor": {
        "id": 128,
        "name": "Arnaud Durand",
        "bio": "Développeur backend spécialisé en Node.js.",
        "avatar": "https://media.licdn.com/dms/image/D4D12AQFtuj_jyvMqtA/article-cover_image-shrink_600_2000/0/1668095952098?e=2147483647&v=beta&t=gL8em4c9f1G2NeG94tM-R4tNNc-LumMtZKHMGqbqbzg"
      },
      "price": 39.99,
      "language": "Français",
      "enrollment_count": 2700,
      "ratings": 4.6
    },
    {
      "id": 24,
      "name": "Machine Learning pour Débutants",
      "description": "Une introduction pratique au Machine Learning et à ses concepts clés.",
      "duration": "10 heures",
      "level": "Débutant",
      "category": "Data Science",
      "image": "https://th.bing.com/th/id/R.be8dccff11ee6dd9bd8f8eca58edc3d4?rik=4kdHKRjNt7ZoPQ&pid=ImgRaw&r=0",
      "link": "https://www.bing.com/videos/search?q=machine+learning&FORM=HDRSC6",
      "instructor": {
        "id": 129,
        "name": "Isabelle Dupont",
        "bio": "Data Scientist avec expertise en Machine Learning.",
        "avatar": "https://th.bing.com/th/id/OIP.gfJV5iqJR6JHkRqqtQRy_wHaF7?w=626&h=501&rs=1&pid=ImgDetMain"
      },
      "price": 49.99,
      "language": "spanish",
      "enrollment_count": 3800,
      "ratings": 4.9
    }
];

// API Endpoint to Get All Courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// Start the Server
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

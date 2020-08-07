const prod = {
    url: {
     API_URL: 'https://csg-heraldry-api.herokuapp.com/' ,
     API_URL_MEMBERS: 'https://csg-heraldry-api.herokuapp.com/members',
     API_URL_HERALDRY: 'https://csg-heraldry-api.herokuapp.com/heraldries'
    }
   };
   const dev = {
    url: {
     API_URL: 'http://localhost:3000',
     API_URL_MEMBERS: 'http://localhost:3000/members',
     API_URL_HERALDRY: 'http://localhost:3000/heraldries'
    }
   };
   export const config = process.env.NODE_ENV === 'development' ? dev : prod;
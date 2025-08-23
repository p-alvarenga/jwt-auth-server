## NodeJS Authentication Login System Showcase

> [!NOTE]
> Project has both back and front-end. You can check front-end code inside `public/`.
> (for sake of simplicity, it's written in `HTML/CSS/JavaScript`).


<hr/>


### Requirements 

- MySQL >= 10 
- Node.JS >= 23


### Database setup 

This project requires a MySQL database. 

You can create a compatible database with the provided SQL schema: 

```bash
mysql -uroot -p < create-db/schema
```

> [!IMPORTANT]
> Do not forget to set `.env` file (there is a template `.env.example`)


#### Project's To-do

- [ ] Configure SSL protocol in `express.js` (HTTPS)
- [ ] Configure a Reverse Proxy to hide true api endpoint  

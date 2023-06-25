import express from "express"
import { Routes } from "./interfaces/routes.interface";
import errorMiddleware from "./middlewares/error.middleware";
import { connect } from "mongoose";
import { dbConnection } from "./database";
import { set } from "mongoose";
import cors from "cors"
import authMiddleware from "./middlewares/auth.middleware";
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'



class App {

   public app: express.Application
   public port:number = 1717


   constructor(routes: Routes[]){
      this.app = express()

      this.initializeSwagger()
      this.connectionToDatabase()
      this.initializeMiddlewares()
      this.initializeRoutes(routes)
      this.initializeErrorHandling()
   }


   public listen() {
      this.app.listen(this.port,() => {
         console.log('Server is rungin at port')
      })
   }


   private async connectionToDatabase() {
      try {
         // set('strictQuery', true)
         await connect(dbConnection.url, dbConnection.options)
         console.log('Connected to database')
      } catch (error) {
         console.log(error)
      }
   }

   private initializeMiddlewares() {
      this.app.use(cors());
      this.app.use(express.json())
      this.app.use(authMiddleware)
   }

   private initializeSwagger() {
      const options = {
        swaggerDefinition: {
          info: {
            title: 'REST API',
            version: '1.0.0',
            description: 'Marketplace HLD - App for catalogs to see and compare prices, buying products.',
          },
        },
        apis: ['swagger.yaml'],
      }
  
      const specs = swaggerJSDoc(options)
      this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
   }
  


   private initializeRoutes(routes: Routes[]) {
      routes.forEach(route => {
        this.app.use('/', route.router)
      })
   }


   private initializeErrorHandling() {
      this.app.use(errorMiddleware)
    }

}


export default App;
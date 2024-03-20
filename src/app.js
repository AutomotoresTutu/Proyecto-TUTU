import  express  from 'express';
import mongoose from 'mongoose';
import sessions from 'express-session';
import mongoStore from 'connect-mongo';
import __dirname from './utils.js';


const PORT = 3012;
const app = express();

app.use(sessions(
    {
        secret:"codercoder123",
        resave: true, 
        saveUninitialized: true,
        store: mongoStore.create(
            {
                mongoUrl:'mongodb+srv://automotorestutu4:Tutuautomotores123@clustertutuautomotores.0wbme4x.mongodb.net/?retryWrites=true&w=majority',
                mongoOptions:{ dbName: 'TutuAutomotores' },
                ttl:3600
            }
        )
    }
))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://automotorestutu4:Tutuautomotores123@clustertutuautomotores.0wbme4x.mongodb.net/?retryWrites=true&w=majority', { dbName: 'TutuAutomotores' });
        console.log('DB online..!');
    } catch (error) {
        console.log(error.message);
    }
};

connectToDatabase();

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});




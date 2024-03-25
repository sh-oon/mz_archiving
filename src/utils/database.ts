import { MongoClient } from 'mongodb'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@atlascluster.fyv3rcb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
const options: any = { useNewUrlParser: true }
let connectDB: Promise<MongoClient>


if (process.env.NODE_ENV === 'development') {
	// 개발 중 재실행을 막음
	if (!global._mongo) {
		global._mongo = new MongoClient(url, options).connect()
	}
	connectDB = global._mongo
} else {
	connectDB = new MongoClient(url, options).connect()
}

export { connectDB }
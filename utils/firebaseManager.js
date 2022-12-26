import { doc, setDoc, getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import { productsCollectionName } from "../constants/utilConstants"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../constants/utilConstants"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"


class FirebaseManager {

    app = initializeApp(firebaseConfig)
    firebaseDB = getFirestore(this.app)
    auth = getAuth()

    async createProduct(productName, product) {
        const productsRef = doc(this.firebaseDB, productsCollectionName, productName)
        await setDoc(productsRef, product)
    }

    
    async readProducts() {
        try {
            const querySnapshot = await getDocs(collection(this.firebaseDB, "products"))
            return querySnapshot.docs.map ((doc) => {
                return doc.data()
            })
        } catch {
            console.log('Error')
        }
    }

    login(email, password) {
        signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMassage = error.message;
        })       
    }

    createAccount(email, password) {
        createUserWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}

export default new FirebaseManager()
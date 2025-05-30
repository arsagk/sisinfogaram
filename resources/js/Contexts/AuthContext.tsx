import React, {
    useContext,
    useState,
    useEffect,
    ReactNode,
    createContext,
} from "react";
import app, { auth } from "../firebase";
import {
    signInWithCustomToken,
    signInWithEmailAndPassword,
} from "firebase/auth";
import myapp from "@/bootstrap";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const AuthContext = createContext<any>(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    function signup(email: string, password: string) {
        // return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(fbtoken: string) {
        return signInWithCustomToken(auth, fbtoken);
        // return signInWithEmailAndPassword(auth, 'admin@example.com', 'password')
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email: string) {
        // return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email: string) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password: string) {
        return currentUser.updatePassword(password);
    }
    function useMessaging() {
        return getMessaging(app);
    }
    const getFcmToken = () => {
        const messaging = useMessaging();
        getToken(messaging, {
            vapidKey:
                "BPjIFSQG3f64C7L6Xes4QEq83BhtraO1hg7tv4QqIM5w0_kK3duvVWf-tLlecHQkmp98m703PSzZytM3b_eUZks",
        })
            .then((currentToken) => {
                if (currentToken) {
                    updateFcmToken(currentToken)
                        .then((e) => {
                            console.log(e.data);
                        })
                        .catch((e) => console.log(e.data));
                } else {
                    // Show permission request UI
                    console.log(
                        "No registration token available. Request permission to generate one."
                    );
                    return null;
                }
            })
            .catch((err) => {
                console.log("An error occurred while retrieving token. ", err);
                // ...
            });

        const updateFcmToken = async (fcmToken: string) => {
            return await myapp.backend.patch("/update_fcmtoken", {
                fcm_token: fcmToken,
            });
        };
    };

    const sendMessage = async (msg: { title: string; body: string }) => {
        if (msg.title != "" && msg.body != "") {
            const resp = await myapp.backend.post("/send_message", msg);
            if (resp) {
                console.log(resp.data);
            }
        } else {
            alert("harus diisi");
        }
    };

    function requestForToken() {
        const messaging = useMessaging();
        const updateFcmToken = async (fcmToken: string) => {
            return await myapp.backend.patch("/update_fcmtoken", {
                fcm_token: fcmToken,
            });
        };
        return getToken(messaging, {
            vapidKey:
                "BPjIFSQG3f64C7L6Xes4QEq83BhtraO1hg7tv4QqIM5w0_kK3duvVWf-tLlecHQkmp98m703PSzZytM3b_eUZks",
        })
            .then((currentToken) => {
                if (currentToken) {
                    // updateFcmToken(currentToken)
                    //     .then((e) => {
                    //         console.log(e.data);
                    //     })
                    //     .catch((e) => console.log(e.data));
                    // Perform any other neccessary action with the token
                } else {
                    // Show permission request UI
                    console.log(
                        "No registration token available. Request permission to generate one."
                    );
                }
            })
            .catch((err) => {
                console.log("An error occurred while retrieving token. ", err);
            });
    }

    const onMessageListener = () =>
        new Promise((resolve) => {
            const messaging = useMessaging();
            onMessage(messaging, (payload) => {
                resolve(payload);
            });
        });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        useMessaging,
        getFcmToken,
        sendMessage,
        requestForToken,
        onMessageListener,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

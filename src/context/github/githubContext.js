// import { createContext, useState } from "react";
import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    //context
    // const [ users, setUsers ] = useState([])
    // const [ loading, setLoading ] = useState(true)

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

 

    //search users

    const searchUsers = async (text) => {

        const params = new URLSearchParams({
            q: text,
        })

        const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization:`token${GITHUB_TOKEN}`
            }
        })
    
        const { items } = await res.json()
        //context
        // setUsers(data)
        // setLoading(false)

        //reducer
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
       }

           //get single user
        const getUser = async (login) => {
        const res = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization:`token${GITHUB_TOKEN}`
            }
        })

        if(res.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await res.json()
            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
    
       }

       //get user repo
       const getRepo= async (login) => {
        const res = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
            headers: {
                Authorization:`token${GITHUB_TOKEN}`
            }
        })
    
        const data = await res.json()
        //context
        // setUsers(data)
        // setLoading(false)

        //reducer
        dispatch({
            type: 'GET_REPO',
            payload: data
        })
       }

       const clearUsers = () => dispatch({
            type: 'CLEAR_USER'
         })

       return <GithubContext.Provider value= {{ 
           users: state.users,
           loading: state.loading,
           user: state.user,
           repos: state.repos,
           searchUsers, 
           getUser,
           getRepo,
           clearUsers,
        }}>

            {children}
        </GithubContext.Provider>
}

export default GithubContext
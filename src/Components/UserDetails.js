import { useParams } from "react-router-dom"

export const UserDetails = () => {
    // const params = useParams()
    // console.log(params)
    // const userId = params.userId
    const { userId } = useParams()
  return (
    <div>
        Details about user {userId}
    </div>
  )
}

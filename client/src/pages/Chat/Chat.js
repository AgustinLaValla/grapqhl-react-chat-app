import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Messages from './Messages';
import { useUserProvider } from '../../App';
import { useHistory } from 'react-router';

export default function Chat() {
    const { user } = useUserProvider();
    const history = useHistory();

    React.useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    }, [user])

    return (
        <div className="wrapper">
            <Header />
            <Messages user={user}/>
            <Footer user={user}/>
        </div>
    )
}

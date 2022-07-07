import fetch from 'isomorphic-unfetch';

const fetchPanel = ({user}: any) => {
    const username = user && user.name;
    return <h1>{username}</h1>
}

export const getServerSideProps = async () => {
    try {
        // 깃허브 api 중 유저의 정보를 받아오는 api를 사용
        const res: any = await fetch("https://api.github.com/users/cshoon95");

        if (res.status === 200) {
            const user = await res.json();
            console.log(user);
            return { props: { user }}           
        }
        return { props: {} };
    } catch (error) {
        console.log(error);
        return { props: {} }
    }
}

export default fetchPanel;
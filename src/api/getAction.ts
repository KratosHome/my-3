export const getAction = async (url: string) => {

    const res = await fetch('https://api.github.com/repos/vercel/next.js', {next: {revalidate: 3600}})

    if (!res.ok) {
        throw new Error('Failed to fetch')
    }

    return res.json()

}
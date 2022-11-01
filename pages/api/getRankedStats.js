export default async function getRankedStats(req, res) {

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    }
  }

  const query = req.query

  const {gamertag} = query


const data = await fetch(`https://halo.api.stdlib.com/infinite@1.7.0/stats/players/service-record/multiplayer/matchmade/ranked/?gamertag=${gamertag}`, options);
const stats = await data.json()


  res.status(200).json({ stats })
}

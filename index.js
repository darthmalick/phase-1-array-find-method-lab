// code your solution here
function superbowlWin(record){
    const foundSeason = record.find(season => season.result === "W")
   return foundSeason ? foundSeason.year : undefined
}
export const formatSeances = (seances: seance[]) => {
   const formatSeances: { [key: string]: string[] } = {}
   seances.forEach((item) => {
      formatSeances[item.hall.name] = []
   })
   seances.forEach((item) => {
      formatSeances[item.hall.name].push(item.time)
   })

   return formatSeances
}

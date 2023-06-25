   const today = new Date();
  const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const thirdday = new Date(tomorrow)
    thirdday.setDate(thirdday.getDate() + 1)
   
    const fourthday=new Date(thirdday)
      fourthday.setDate(fourthday.getDate() + 1)

   
    const fivetday=new Date(fourthday)
      fivetday.setDate(fivetday.getDate() + 1)

       const dateDay=[today,tomorrow,thirdday,fourthday,fivetday]

   export default   dateDay
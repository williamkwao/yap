export const parseEventsFromMarkdown = events =>
  events.map(event => {
    const date = new Date(event.date)
    const month = date.toLocaleString('en-US', { month: 'short' })
    const day = date.getDate()

    var timeString = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })

    return {
      date: `${month.toUpperCase()} ${day}`,
      time: timeString,
      name: event.name,
      address: event.address,
    }
  })

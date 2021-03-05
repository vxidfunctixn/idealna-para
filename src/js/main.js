const vs = ['jeden', 'Dwa', 'Trzy']

const show = (variables) => {
  const vars = [...variables]
  vars.map((element) => {
    console.log(element)
  })
}

show(vs)

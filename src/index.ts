const main = async () => {
  console.log('main')
  throw new Error('error')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

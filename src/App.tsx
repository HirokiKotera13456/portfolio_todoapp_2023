
import { Box, Container, Grid } from '@mui/material'
import { Form } from './components/Form'
import { List } from './components/List'
import { Header } from './components/Header'

const App: React.FunctionComponent = () => {

  return (
    <>
      <Box sx={{ marginTop: "5%"}}>
        <Container maxWidth="md">
          <Grid container >
            <Grid item xs={12} md={12}>
              <Header />
              <Form />
              <List />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default App

import { Grid, Text } from './styles'
import SkipppingIllustation from '../../assets/skipppingillustationcard.svg'

import { Run } from '../Run'
import { StartTranking } from '../StartTranking'
import { CategoryCard } from '../CategoryCard'

export function Main() {
  return (
    <Grid>
      <div className="skinppingIllustration">
        <img src={SkipppingIllustation} alt="SkipppingIllustation" />
        <Text>
          “You will have everything you need to reach your personal fitness goals”
        </Text>

      </div>

      <Run />
      <StartTranking />
      <CategoryCard />

    </Grid>
  )
}

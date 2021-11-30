import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Typography, Grid, styled } from '@mui/material'
import { ReactComponent as ArrowLeft } from 'assets/componentsIcon/arrow_left.svg'
import { ReactComponent as RiskStatementIcon } from 'assets/svg/risk_statement.svg'
import { ReactComponent as Faq } from 'assets/svg/faq.svg'
import { routes } from 'constants/routes'
import theme from 'theme'
import Card, { OutlinedCard } from 'components/Card/Card'
import Accordion from 'components/Accordion'
import Divider from 'components/Divider'
import InputNumerical from 'components/Input/InputNumerical'
import Button from 'components/Button/Button'
import { SimpleProgress } from 'components/Progress'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const data = {
  ['Spot Price']: '59,000 USDT',
  ['APY']: '140.25%',
  ['Strike Price']: '62,800 USDT',
  ['Delivery Date']: '29 Oct 2021',
  ['Current Progress']: 0.16,
  minAmount: '0.0001',
  maxAmount: '2.00'
}

const StyledUnorderList = styled('ul')(({ theme }) => ({
  paddingLeft: '18px',
  color: '#808080',
  '& li span': {
    color: '#252525'
  },
  '& li::marker': {
    color: theme.palette.primary.main
  }
}))

const StyledOrderList = styled('ol')(({ theme }) => ({
  display: 'block',
  listStyle: 'none',
  counterReset: 'counterReset',
  position: 'relative',
  paddingLeft: 36,
  '& li': {
    paddingBottom: '24px'
  },
  '& li:before': {
    counterIncrement: 'counterReset',
    content: 'counter(counterReset)',
    color: theme.palette.primary.main,
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '1px solid #31B047',
    float: 'left',
    textAlign: 'center',
    marginRight: 12,
    position: 'absolute',
    left: '-1px'
  }
}))

export default function DualInvestMgmt() {
  const [amount, setAmount] = useState('')

  return (
    <Box display="grid" width="100%" alignContent="flex-start" marginBottom="auto" justifyItems="center">
      <Box
        display="flex"
        alignItems="center"
        sx={{ width: '100%', background: theme.palette.background.paper, padding: '28px 165px' }}
      >
        <NavLink to={routes.dualInvest} style={{ textDecoration: 'none' }}>
          <ArrowLeft />
          <Typography component="span" color={theme.bgColor.bg1} fontSize={14} ml={16}>
            Back
          </Typography>
        </NavLink>
      </Box>
      <Box padding="60px 0" sx={{ maxWidth: theme.width.maxContent }} width="100%">
        <Box mb={60}>
          <Typography fontSize={44} fontWeight={700} component="span">
            BTC Financial Management
          </Typography>
          <Typography fontSize={44} fontWeight={400} component="span" ml={8}>
            [upward exercise]
          </Typography>
        </Box>
        <Grid container spacing={20}>
          <Grid xs={12} md={4} item>
            <Card width="100%" padding="36px 24px">
              <Box display="flex" flexDirection="column" gap={32}>
                {Object.keys(data).map((key, idx) => (
                  <Box key={idx} display="flex" justifyContent="space-between">
                    <Typography sx={{ opacity: 0.8 }}>{key}</Typography>
                    {key === 'Current Progress' ? (
                      <SimpleProgress key={1} val={0.16} total={1} />
                    ) : (
                      <Typography color={key === 'APY' ? theme.palette.primary.main : theme.palette.text.primary}>
                        {data[key as keyof typeof data]}
                      </Typography>
                    )}
                  </Box>
                ))}
                <Divider extension={24} sx={{ opacity: 0.1 }} />
                <Box>
                  <InputNumerical
                    value={amount}
                    onMax={() => {}}
                    label={'Subscription Amount'}
                    onChange={e => setAmount(e.target.value)}
                    balance="123"
                    unit="BTC"
                    onDeposit={() => {}}
                  />
                  <Box display="flex" alignItems="center" justifyContent="space-between" mt={12}>
                    <Typography fontSize={12} sx={{ opacity: 0.5 }}>
                      Min investment: {data.minAmount} BTC
                    </Typography>
                    <Typography fontSize={12} sx={{ opacity: 0.5 }}>
                      Max investment: {data.maxAmount} BTC
                    </Typography>
                  </Box>
                </Box>
                <Button>Subscribe</Button>
                <Box display="flex">
                  <InfoOutlinedIcon sx={{ color: theme.palette.primary.main, height: 12 }} />
                  <Typography component="span" fontSize={12} sx={{ opacity: 0.5 }}>
                    Once subscribed the APY will get locked in, the product can&apos;t be cancelled after subscription.
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid xs={12} md={8} item>
            <Card width="100%" padding="32px 24px">
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize={24} fontWeight={700} mb={36}>
                  Purchase expected income graph
                </Typography>
              </Box>
              <OutlinedCard padding="16px 20px">
                <Typography fontSize={16} color={theme.palette.text.primary}>
                  Return on investment:
                </Typography>
                <StyledUnorderList>
                  <li>
                    When the final settlement price ≥ 62,800 USDT, you will receive{' '}
                    <span style={{ color: theme.palette.text.primary }}>56,750.61 USDT</span>.
                  </li>
                  <li>
                    When the settlement price is &lt; 62,800 USDT, you will receive{' '}
                    <span style={{ color: theme.palette.text.primary }}>1.682655 BTC</span>.
                  </li>
                  <li>
                    APY will be refreshed instantly, and Antimatter will use the latest APY when you successfully
                    complete the subscription.
                  </li>
                </StyledUnorderList>
              </OutlinedCard>
            </Card>
          </Grid>
          <Grid xs={12} item>
            <Card width="100%" padding="32px 24px">
              <Box display="flex" alignItems="center" gap={11.68}>
                <RiskStatementIcon />
                <Typography fontSize={24} fontWeight={700}>
                  Risk statement
                </Typography>
              </Box>
              <StyledOrderList>
                <li>
                  This product is a non-principal-guaranteed wealth management product. Market fluctuations may result
                  in a loss of principal. Please invest with caution.
                </li>
                <li>
                  The investment amount is calculated in real time with the market, please refer to the actual purchase
                  transaction.
                </li>
                <li>
                  The annualized rate of return changes in real time with the market, please refer to the actual rate of
                  return of the purchase transaction.
                </li>
                <li>
                  The average spot price of the last 30 minutes at 12:00 (UTC+8) on the delivery date will be used as
                  the settlement price.
                </li>
                <li>Early redemption is not supported, and users can only get rewards after the expiry date.</li>
                <li>
                  After the product is purchased, you can view it on my currency holding page, and the payment will be
                  automatically issued to the Account after the delivery.
                </li>
              </StyledOrderList>
            </Card>
          </Grid>
          <Grid xs={12} item>
            <Card width="100%" padding="32px 24px">
              <Box display="flex" alignItems="center" gap={11.68}>
                <Faq />
                <Typography fontSize={24} fontWeight={700}>
                  FAQ
                </Typography>
              </Box>
              <Accordion
                items={[
                  {
                    summary: 'accordion1',
                    details: '123'
                  },
                  {
                    summary: 'accordion2',
                    details: '123'
                  }
                ]}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/appwrite'

const Home = async () => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome,'
            user={loggedIn?.name || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />

          <TotalBalanceBox
            account={[]}
            totalBanks={1}
            totalCurrentBalance={1250.51}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.40 }, { currentBalance: 242.40 }]}
      />
    </section>
  )
}

export default Home

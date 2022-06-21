# Poker DAO
Decentralized and fully anonymous, non-KYC poker players heaven with
rich players rewards decided and voted by community!

## Motivation - disadvantages and weak points of current centralised online poker sites
Currently the whole poker industry is heavily regulated, taxed and
trust-needed. There were cases in the past, where an employee of a
poker site provider exploited access to the internal poker software,
so they could see other players cards and "win" a huge amount of money
because of that.

Current situation of online poker industry:
- Heavily regulated
- Heavily taxed
- Relying on closed-source software
- Risk of pausing/declining withdrawals

I believe bringing decentralised technologies to online poker could help
us solve most of the above problems. Let me start:

## Abstract

### Technological components
Full project consists of 3 parts:
- **Frontend (user interface)**
  - logging in
  - choosing a poker table
  - playing at the poker table
  - managing your wallets
  - ?governance?
- **Backend** -
  - Maintains connection/session between players at the table
  - Stores database with currently offered **not-running** tournaments/S&Gs
- **Contracts** -
  - Handles execution of all money operations
    - Temporarily keeping the buy-ins (tournaments/S&Gs) or player cash game balance
    - Repayment of prizes (tournaments/S&Gs) or cash-outs from cash game
    - Keeping a record of game structure and prizes

Ideally the contracts should be written as much extensible as possible.
This also means allowing anyone to simply build UI around this.

### Censorship-free deployment
- Frontend = IPFS
- Backend = ?
- Contracts = Blockchain

Ideas: Decentralized database:
https://gun.eco/
https://github.com/orbitdb/orbit-db

## Full flow description

### 1) Game creation + joining
User will launch FE app. User logins with wallet (by signing a message).
Backend maintains the login session & connection with other players.
Login session can be also stored on a decentralized database.

After user logins, he can see the list of currently offered games.


### 2) Shuffling & card dealing

### 3) Game itself

### 4) Win/Lose resolve


## Key questions

### 1) How and where to perform shuffling?
- Contracts
- Backend
- Frontend
- Combination?

### 2) Frontend - webapp vs native apps


## Challenges
1) Scalability
2) Gas-effective
3) Trully trustless
4) Secure

## Inspirations / Useful materials/links
- [Virtue poker whitepaper](https://virtue.poker/public/whitepaper.pdf)


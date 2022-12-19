import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react'
import { ethers, providers } from 'ethers'
import type { NextPage } from 'next'
import { useState } from 'react'
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useWaitForTransaction,
} from 'wagmi'
import { Dex as DEX_CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import DEX_ABI from '../artifacts/contracts/Dex.sol/DEX.json'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import { DEX as YourContractType } from '../types/typechain'
import Dex from '../components/Dex'
const localProvider = new providers.StaticJsonRpcProvider(
  'http://localhost:8545'
)

const GOERLI_CONTRACT_ADDRESS = '0x3B73833638556f10ceB1b49A18a27154e3828303'

/**
 * Prop Types
 */

const Home: NextPage = () => {
  const { isLocalChain } = useCheckLocalChain()

  const { isMounted } = useIsMounted()

  const CONTRACT_ADDRESS = isLocalChain
    ? DEX_CONTRACT_ADDRESS
    : GOERLI_CONTRACT_ADDRESS

  const { address } = useAccount()

  const provider = useProvider()

  const toast = useToast()
  const [initValue, setInitValue] = useState<number>(0)

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: DEX_ABI.abi,
    functionName: 'init',
    args: [initValue],
    enabled: Boolean(initValue),
  })

  const { data, write } = useContractWrite(config)

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      console.log('success data', data)
      toast({
        title: 'Transaction Successful',
        description: (
          <>
            <Text>Successfully updated the Greeting!</Text>
            <Text>
              <Link
                href={`https://goerli.etherscan.io/tx/${data?.blockHash}`}
                isExternal
              >
                View on Etherscan
              </Link>
            </Text>
          </>
        ),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    },
  })

  // call the smart contract, read the current greeting value
  async function fetchContractGreeting() {
    if (provider) {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        DEX_ABI.abi,
        provider
      ) as YourContractType
      try {
        const data = await contract.getLiquidity(
          '0x80dD5aD6B8775c4E31C999cA278Ef4D035717872'
        )
        console.log(address, 'data')
        // dispatch({ type: 'SET_GREETING', greeting: data })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Error: ', err)
      }
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <Layout>
      <Box maxWidth="container.sm" p="8" mt="8" bg="gray.100">
        <Text fontSize="xl">Contract Address: {CONTRACT_ADDRESS}</Text>
        <Divider my="8" borderColor="gray.400" />
        <Box>
          {/* <Text fontSize="lg">Greeting: {state.greeting}</Text> */}
          <Button
            mt="2"
            colorScheme="teal"
            disabled={!address}
            onClick={fetchContractGreeting}
          >
            {address ? 'get balance' : 'Please Connect Your Wallet'}
          </Button>
        </Box>
        <Divider my="8" borderColor="gray.400" />
        <Box>
          <Text fontSize="lg" mb="2">
            init a contract
          </Text>
          <Input
            bg="white"
            type="number"
            placeholder="contract value"
            disabled={!address || isLoading}
            onChange={(e) => setInitValue(Number(e.target.value))}
          />
          <Button
            mt="2"
            colorScheme="teal"
            isLoading={isLoading}
            disabled={!address || isLoading}
            onClick={() => write?.()}
          >
            {address ? 'init contract' : 'Please Connect Your Wallet'}
          </Button>
        </Box>
      </Box>
      <Dex />
    </Layout>
  )
}

export default Home

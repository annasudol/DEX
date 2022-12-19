import {
  Box,
  Button,
  Divider,
  Input,
  Link,
  Text,
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
import { useIsMounted } from '../hooks/useIsMounted'
import { DEX as YourContractType } from '../types/typechain'
import Dex from '../components/Dex'

const Home: NextPage = () => {
  const { isMounted } = useIsMounted()
  const CONTRACT_ADDRESS = DEX_CONTRACT_ADDRESS
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

  async function fetchBalance() {
    if (provider) {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        DEX_ABI.abi,
        provider
      ) as YourContractType
      try {
        const data = await contract.totalLiquidity()
        console.log(address, ethers.utils.formatEther(data), 'data')
        const balance = await contract.getLiquidity(address as string)
        console.log(balance, 'data')
        console.log(address, ethers.utils.formatEther(balance), 'data')
      } catch (err) {
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
          <Button
            mt="2"
            colorScheme="teal"
            disabled={!address}
            onClick={fetchBalance}
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

import { useQuery } from '@tanstack/react-query'
import { Address } from '../types/address'
import { fetchProfileStats } from '../utils/api/fetch-profile-stats'
import { fetchProfileDetails } from '../utils/api/fetch-profile-details'

export const useProfile = (address: Address) => {
  const { data: profileDetails, isLoading: detailsLoading } = useQuery({
    queryKey: ['profile', 'details', address],
    queryFn: async () => 
       await fetchProfileDetails(address)
  })

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['profile', 'stats', address],
    queryFn: async () => await fetchProfileStats(address)
  })

  const ens = profileDetails?.ens
  const ranks = profileDetails?.ranks

  return {
    ens,
    ranks,
    stats,
    detailsLoading,
    statsLoading
  }
}

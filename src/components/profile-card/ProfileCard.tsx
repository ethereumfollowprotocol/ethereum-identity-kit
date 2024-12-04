import React from 'react'
import { ens_beautify } from '@adraffy/ens-normalize'
import './ProfileCard.css';
import { ProfileCardProps } from './ProfileCard.types';
import { useProfile } from '../../hooks/useProfile';
import { truncateAddress } from '../../utils/truncateAddress';
import LoadingCell from '../loading-cell';

const ProfileCard: React.FC<ProfileCardProps> = ({ userAddress }) => {
  const { ens, detailsLoading } = useProfile(userAddress)

  return (
    <div className='profile-card'>
      <p>{detailsLoading ? <LoadingCell height='32px' width='200px' /> : ens?.name ? ens_beautify(ens.name) : truncateAddress(userAddress)}</p>
    </div>
  )
}

export default ProfileCard;

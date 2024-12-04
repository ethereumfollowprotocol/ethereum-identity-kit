import React from 'react'
import './ProfileCard.css';
import { ProfileCardProps } from './ProfileCard.types';

const ProfileCard: React.FC<ProfileCardProps> = ({ userAddress}) => {
  return (
    <div className='profile-card'><p>{userAddress}</p></div>
  )
}

export default ProfileCard;

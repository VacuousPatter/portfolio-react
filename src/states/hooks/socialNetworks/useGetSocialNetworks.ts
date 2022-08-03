import { useRecoilValue } from 'recoil';
import { socialNetworksState } from 'states/socialNetworks';

export const useGetSocialNetworks = () => {
    const socialNetworks = useRecoilValue(socialNetworksState);
    return socialNetworks;
};

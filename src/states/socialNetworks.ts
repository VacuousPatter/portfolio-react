import { atom } from 'recoil';
import socialNetworks from 'data/socials';

export const socialNetworksState = atom({
    key: 'socialNetworksState',
    default: socialNetworks,
});

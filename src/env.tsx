import {
    faBed,
    faRecordVinyl,
    faCouch,
    faUtensils,
    faMugHot,
    faBriefcase,
    faMusic,
    faPlayCircle,
    faChild
} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import { ZoneInformation, SourceInformation } from './common/types';

# USE LAN IP ADDRESSES in the EXPORT lines
export const HomeName: string = '10.10.20.112';
export const HostName: string = '10.10.20.112:8181';
export const Zones: Array<ZoneInformation> = [
    { zone: '11', label: 'Kitchen Island', interior: true, exterior: false, icon: faUtensils },
    { zone: '12', label: 'Kitchen Table', interior: true, exterior: false, icon: faMugHot },
    { zone: '13', label: 'Office', interior: true, exterior: false, icon: faBriefcase },
    { zone: '14', label: 'Kids Bedroom', interior: true, exterior: false, icon: faChild },
    { zone: '15', label: 'Main Bedroom', interior: true, exterior: false, icon: faBed },
    { zone: '16', label: 'Dining Room', interior: true, exterior: false, icon: faUtensils },
];

# Create ALL of the sources - you might just need to test something - you can always edit later to suit your needs.
export const SourceNames: Array<SourceInformation> = [
    { ch: '01', name: "Moode", icon: faMusic },
    { ch: '02', name: "Google", icon: faGoogle },
    { ch: '03', name: "three", icon: faPlayCircle },
    { ch: '04', name: "Records", icon: faRecordVinyl },
    { ch: '05', name: "five", icon: faPlayCircle },
    { ch: '06', name: "six", icon: faPlayCircle },
];

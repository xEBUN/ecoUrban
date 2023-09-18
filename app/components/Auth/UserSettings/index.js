import React from 'react';
import {UserSettingsModule} from "@/app/components//Auth/UserSettings/user.settings.module";
import {useRouter} from "next/navigation";

const Index = () => {
    const router = useRouter()

    return (
        <UserSettingsModule className='mobile-wrapper'>
            <svg width="207" height="30" viewBox="0 0 207 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.4 23V0.599998H15.44V4.44H4.56V9.88H14.8V13.72H4.56V19.16H15.44V23H0.4ZM28.0675 16.92H32.0675C31.9182 17.6453 31.6728 18.3493 31.3315 19.032C31.0115 19.7147 30.5635 20.3973 29.9875 21.08C29.4115 21.7413 28.6328 22.2853 27.6515 22.712C26.6915 23.1173 25.6035 23.32 24.3875 23.32C21.9768 23.32 19.9822 22.5307 18.4035 20.952C16.8462 19.352 16.0675 17.3147 16.0675 14.84C16.0675 12.3653 16.8462 10.3387 18.4035 8.76C19.9822 7.16 21.9768 6.36 24.3875 6.36C25.6035 6.36 26.6915 6.57333 27.6515 7C28.6328 7.40533 29.4115 7.93867 29.9875 8.6C30.5635 9.26133 31.0115 9.92267 31.3315 10.584C31.6728 11.2453 31.9182 11.9173 32.0675 12.6H28.0675C27.4275 10.8933 26.2008 10.04 24.3875 10.04C23.1715 10.04 22.1475 10.488 21.3155 11.384C20.4835 12.28 20.0675 13.432 20.0675 14.84C20.0675 16.248 20.4835 17.4 21.3155 18.296C22.1475 19.192 23.1715 19.64 24.3875 19.64C26.2648 19.64 27.4915 18.7333 28.0675 16.92ZM37.3218 18.296C38.1538 19.192 39.1778 19.64 40.3938 19.64C41.6098 19.64 42.6338 19.192 43.4658 18.296C44.2978 17.4 44.7138 16.248 44.7138 14.84C44.7138 13.432 44.2978 12.28 43.4658 11.384C42.6338 10.488 41.6098 10.04 40.3938 10.04C39.1778 10.04 38.1538 10.488 37.3218 11.384C36.4898 12.28 36.0738 13.432 36.0738 14.84C36.0738 16.248 36.4898 17.4 37.3218 18.296ZM34.4098 8.76C35.9884 7.16 37.9831 6.36 40.3938 6.36C42.8044 6.36 44.7884 7.16 46.3458 8.76C47.9244 10.3387 48.7138 12.3653 48.7138 14.84C48.7138 17.3147 47.9244 19.352 46.3458 20.952C44.7884 22.5307 42.8044 23.32 40.3938 23.32C37.9831 23.32 35.9884 22.5307 34.4098 20.952C32.8524 19.352 32.0738 17.3147 32.0738 14.84C32.0738 12.3653 32.8524 10.3387 34.4098 8.76ZM49.8212 13.88V0.599998H53.9812V13.88C53.9812 15.4587 54.4719 16.76 55.4532 17.784C56.4346 18.808 57.6506 19.32 59.1012 19.32C60.5519 19.32 61.7679 18.808 62.7493 17.784C63.7306 16.76 64.2213 15.4587 64.2213 13.88V0.599998H68.3813V13.88C68.3813 16.76 67.5386 19.0533 65.8533 20.76C64.1679 22.4667 61.9172 23.32 59.1012 23.32C56.2852 23.32 54.0346 22.4667 52.3492 20.76C50.6639 19.0533 49.8212 16.76 49.8212 13.88ZM70.2925 23V6.68H73.6525L73.9725 8.12H74.1325C74.3245 7.864 74.5592 7.62933 74.8365 7.416C75.4978 6.92533 76.2232 6.68 77.0125 6.68H80.2125V10.52H77.3325C75.3058 10.52 74.2925 11.5333 74.2925 13.56V23H70.2925ZM85.517 18.392C86.285 19.224 87.2877 19.64 88.525 19.64C89.7623 19.64 90.765 19.224 91.533 18.392C92.301 17.5387 92.685 16.3547 92.685 14.84C92.685 13.3253 92.301 12.152 91.533 11.32C90.765 10.4667 89.7623 10.04 88.525 10.04C87.2877 10.04 86.285 10.4667 85.517 11.32C84.749 12.152 84.365 13.3253 84.365 14.84C84.365 16.3547 84.749 17.5387 85.517 18.392ZM80.365 23V0.599998H84.365V8.44H84.525C84.8237 8.056 85.197 7.71467 85.645 7.416C86.6903 6.712 87.8637 6.36 89.165 6.36C91.2983 6.36 93.0797 7.14933 94.509 8.728C95.9597 10.2853 96.685 12.3227 96.685 14.84C96.685 17.3573 95.9597 19.4053 94.509 20.984C93.0797 22.5413 91.2983 23.32 89.165 23.32C87.757 23.32 86.541 22.9787 85.517 22.296C85.069 21.9973 84.685 21.6453 84.365 21.24H84.205L83.885 23H80.365ZM107.889 23L107.569 21.4H107.409C107.131 21.7413 106.758 22.0613 106.289 22.36C105.265 23 104.091 23.32 102.769 23.32C100.977 23.32 99.5367 22.84 98.4487 21.88C97.3821 20.92 96.8487 19.7467 96.8487 18.36C96.8487 16.696 97.4247 15.3733 98.5767 14.392C99.7287 13.4107 101.393 12.92 103.569 12.92H107.249V12.6C107.249 11.6827 106.982 10.9467 106.449 10.392C105.937 9.83733 105.243 9.56 104.369 9.56C103.537 9.56 102.865 9.77333 102.353 10.2C101.862 10.6267 101.574 11.1067 101.489 11.64H97.4887C97.6807 10.168 98.3634 8.92 99.5367 7.896C100.71 6.872 102.321 6.36 104.369 6.36C106.417 6.36 108.07 6.95733 109.329 8.152C110.609 9.34667 111.249 10.8293 111.249 12.6V23H107.889ZM107.249 16.44V15.96H103.889C101.862 15.96 100.849 16.6533 100.849 18.04C100.849 18.68 101.073 19.192 101.521 19.576C101.969 19.9387 102.598 20.12 103.409 20.12C104.625 20.12 105.563 19.8 106.225 19.16C106.907 18.4987 107.249 17.592 107.249 16.44ZM112.842 23V6.68H116.522L116.842 8.28H117.002C117.258 7.96 117.621 7.64 118.09 7.32C119.072 6.68 120.202 6.36 121.482 6.36C123.338 6.36 124.864 7 126.058 8.28C127.274 9.53867 127.882 11.192 127.882 13.24V23H123.882V13.56C123.882 12.5147 123.552 11.672 122.89 11.032C122.25 10.3707 121.408 10.04 120.362 10.04C119.317 10.04 118.464 10.3707 117.802 11.032C117.162 11.672 116.842 12.5147 116.842 13.56V23H112.842Z" fill="#424242"/>
                <path d="M133.137 29.4L137.137 6.68H141.297L141.361 8.28H141.521C141.862 7.81067 142.438 7.37333 143.249 6.968C144.081 6.56267 144.977 6.36 145.937 6.36C147.899 6.36 149.531 7.04267 150.833 8.408C152.134 9.752 152.785 11.5227 152.785 13.72C152.785 16.3867 151.889 18.6587 150.097 20.536C148.305 22.392 146.225 23.32 143.857 23.32C142.321 23.32 141.158 23.0213 140.369 22.424C139.985 22.168 139.697 21.8693 139.505 21.528H139.345L137.937 29.4H133.137ZM143.825 18.84C144.934 18.84 145.905 18.4027 146.737 17.528C147.569 16.6533 147.985 15.544 147.985 14.2C147.985 13.176 147.675 12.3653 147.057 11.768C146.438 11.1493 145.638 10.84 144.657 10.84C143.547 10.84 142.577 11.2773 141.745 12.152C140.913 13.0053 140.497 14.104 140.497 15.448C140.497 16.472 140.806 17.2933 141.425 17.912C142.043 18.5307 142.843 18.84 143.825 18.84ZM153.105 15.992L154.737 6.68H159.537L158.033 15.352C157.99 15.6507 157.969 15.8533 157.969 15.96C157.969 16.728 158.203 17.3787 158.673 17.912C159.163 18.424 159.835 18.68 160.689 18.68C161.563 18.68 162.299 18.4133 162.897 17.88C163.494 17.3467 163.867 16.664 164.017 15.832L165.617 6.68H170.417L167.569 23H163.409L163.313 21.56H163.153C162.875 21.88 162.502 22.1787 162.033 22.456C161.158 23.032 160.07 23.32 158.769 23.32C157.062 23.32 155.665 22.7973 154.577 21.752C153.489 20.6853 152.945 19.288 152.945 17.56C152.945 17.0907 152.998 16.568 153.105 15.992ZM169.18 23L173.116 0.599998H177.916L173.98 23H169.18ZM175.205 17.88H180.005C180.005 18.0507 180.037 18.2533 180.101 18.488C180.186 18.7227 180.453 19 180.901 19.32C181.349 19.64 181.957 19.8 182.725 19.8C183.493 19.8 184.079 19.6293 184.485 19.288C184.911 18.9467 185.125 18.5307 185.125 18.04C185.125 17.6347 184.975 17.3147 184.677 17.08C184.378 16.8453 183.834 16.664 183.045 16.536L181.925 16.376C180.047 16.0987 178.671 15.608 177.797 14.904C176.922 14.1787 176.485 13.1973 176.485 11.96C176.485 10.36 177.103 9.02667 178.341 7.96C179.599 6.89333 181.381 6.36 183.685 6.36C186.01 6.36 187.77 6.86133 188.965 7.864C190.159 8.84533 190.799 10.0507 190.885 11.48H186.085C185.978 11.2027 185.829 10.968 185.637 10.776C185.146 10.2853 184.442 10.04 183.525 10.04C182.799 10.04 182.245 10.1787 181.861 10.456C181.477 10.712 181.285 11.0533 181.285 11.48C181.285 12.1627 181.925 12.6 183.205 12.792L184.805 13.016C188.218 13.4853 189.925 15 189.925 17.56C189.925 19.1813 189.327 20.5467 188.133 21.656C186.959 22.7653 185.103 23.32 182.565 23.32C180.111 23.32 178.287 22.84 177.093 21.88C175.919 20.8987 175.29 19.5653 175.205 17.88ZM201.245 18.04H205.981C205.427 19.3413 204.403 20.5467 202.909 21.656C201.437 22.7653 199.731 23.32 197.789 23.32C195.443 23.32 193.555 22.6373 192.125 21.272C190.717 19.9067 190.013 18.1467 190.013 15.992C190.013 13.2187 190.92 10.9253 192.733 9.112C194.568 7.27733 196.755 6.36 199.293 6.36C201.619 6.36 203.475 7.04267 204.861 8.408C206.248 9.752 206.941 11.4693 206.941 13.56C206.941 14.3067 206.845 15.16 206.653 16.12H194.685V16.28C194.685 17.24 194.995 18.0187 195.613 18.616C196.232 19.192 197.053 19.48 198.077 19.48C198.909 19.48 199.688 19.2453 200.413 18.776C200.797 18.52 201.075 18.2747 201.245 18.04ZM195.133 13.24H202.493C202.408 12.1733 202.067 11.3733 201.469 10.84C200.893 10.3067 200.115 10.04 199.133 10.04C198.301 10.04 197.523 10.3173 196.797 10.872C196.072 11.4267 195.517 12.216 195.133 13.24Z" fill="#13902C"/>
            </svg>
            <h2>Давайте немного уточним о вашем районе</h2>
            <p>Это нужно для корректного отображения информации</p>
            <svg width="268" height="268" viewBox="0 0 268 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M134 0C81.6618 0 39.0833 42.5785 39.0833 94.9167C39.0833 186.684 126.619 263.422 130.348 266.638C131.398 267.542 132.693 268 134 268C135.306 268 136.602 267.542 137.651 266.638C141.37 263.411 228.917 186.673 228.917 94.9167C228.917 42.5785 186.338 0 134 0ZM183.826 97.0495C182.966 99.1377 180.922 100.5 178.667 100.5H173.083V139.583C173.083 142.665 170.582 145.167 167.5 145.167H145.167C142.085 145.167 139.583 142.665 139.583 139.583V111.667H128.417V139.583C128.417 142.665 125.915 145.167 122.833 145.167H100.5C97.4179 145.167 94.9166 142.665 94.9166 139.583V100.5H89.3333C87.0776 100.5 85.0341 99.1377 84.1743 97.0495C83.3033 94.9613 83.7834 92.5605 85.3803 90.9637L130.047 46.297C132.224 44.1195 135.764 44.1195 137.942 46.297L182.608 90.9637C184.216 92.5717 184.697 94.9613 183.826 97.0495Z" fill="#13902C"/>
            </svg>
            <button onClick={()=> router.push('/geo-settings')}>Далее</button>
        </UserSettingsModule>
    );
};

export default Index;
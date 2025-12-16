import {
    LoadingItem,
    LoadingWrapper,
    LoadingGroup,
    LoadingTheme,
    LoadingButton,
    LoadingContent,
    LoadingTitle,
    LoadingDate,
    LoadingDateIcon,
    LoadingDateText,
} from './LoadingCard.styled';

export function LoadingCard() {
    return (
        <LoadingItem>
            <LoadingWrapper>
                <LoadingGroup>
                    <LoadingTheme />
                    <LoadingButton>
                        <div />
                        <div />
                        <div />
                    </LoadingButton>
                </LoadingGroup>
                <LoadingContent>
                    <LoadingTitle />
                    <LoadingDate>
                        <LoadingDateIcon />
                        <LoadingDateText />
                    </LoadingDate>
                </LoadingContent>
            </LoadingWrapper>
        </LoadingItem>
    );
}
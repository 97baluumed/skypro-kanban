import {
    LoadingWrapper,
    LoadingGroup,
    LoadingButton,
    LoadingContent,
    LoadingTitle,
    LoadingDate,
    LoadingText,
    Skeleton
} from './LoadingCard.styled';

export function LoadingCard() {
    return (
        <LoadingWrapper>
            <LoadingText>
                <LoadingTitle />
                <LoadingButton>
                    <Skeleton></Skeleton>
                    <Skeleton></Skeleton>
                    <Skeleton></Skeleton>
                </LoadingButton>
            </LoadingText>
            <LoadingGroup>
                <LoadingContent />
                <LoadingDate />
            </LoadingGroup>
        </LoadingWrapper>
    );
}


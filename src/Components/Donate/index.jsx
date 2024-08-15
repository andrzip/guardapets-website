import React from 'react';
import { Container, FormWrapper, Title, FormCol, FormRow, Input, TextLink, StyledLink, Button } from './DonateStyles';

const Donate = () => {
    return (
        <Container>
            <FormWrapper>
                <Title>Formulário de Doação</Title>
                <FormRow>
                    <FormCol>
                        <FormRow>
                            <Input
                                type="text"
                                placeholder="Nome"
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                type="text"
                                placeholder="Tipo"
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                type="text"
                                placeholder="Idade"
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                type="text"
                                placeholder="Sexo"
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                type="text"
                                placeholder="Porte"
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                type="file"
                                placeholder="Imagem"
                            />
                        </FormRow>
                    </FormCol>

                    <FormCol>
                        <Input
                            type="textarea"
                            placeholder="Insira uma descrição sobre o animal..."
                        />
                    </FormCol>
                </FormRow>
                <TextLink>
                    Ao clicar em Doar, você concorda com nossos <StyledLink to="/">Termos, Política de Privacidade e Política de Cookies.</StyledLink>
                </TextLink>
                <Button>Doar</Button>
            </FormWrapper>
        </Container>
    )
}

export default Donate;
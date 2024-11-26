import React from 'react';
import { 
    Container, 
    Title, 
    Section, 
    SectionTitle, 
    SectionContent, 
    HighlightedText 
} from './TermsStyles';

const TermsPage = () => {
    return (
        <Container>
            <Title>Termos de Uso e Política de Privacidade</Title>

            {/* Termos de Uso */}
            <Section>
                <SectionTitle>Termos de Uso</SectionTitle>
                <SectionContent>
                    Ao acessar e utilizar a plataforma do GuardaPets, você concorda com os seguintes termos e condições. Caso não concorde com qualquer uma das disposições descritas, você não deve utilizar a plataforma.

                    <ul>
                        <li>Acesso à Plataforma: A utilização da plataforma GuardaPets é permitida apenas para usuários com 18 anos ou mais. Se você for menor de idade, deverá obter a permissão dos responsáveis legais para utilizar nossos serviços. O acesso à plataforma é condicionado ao cumprimento desses termos.</li>
                        <li>Responsabilidade pelo Conteúdo: Ao cadastrar um animal para adoção ou doação, o usuário é inteiramente responsável pelas informações fornecidas. Isso inclui dados como nome, idade, descrição e outros detalhes do animal. O GuardaPets se reserva o direito de remover qualquer conteúdo que seja considerado inadequado, ilegal ou que infrinja os direitos de outros usuários ou de terceiros.</li>
                        <li>Proibição de Atividades Ilegais: O uso da plataforma é estritamente proibido para qualquer atividade ilegal, como a venda de animais, envio de mensagens de spam, publicidade não autorizada, ou qualquer outra ação que viole as leis em vigor ou os direitos de terceiros. A violação desta cláusula poderá resultar no banimento do usuário da plataforma.</li>
                        <li>Alterações nos Termos: O GuardaPets se reserva o direito de modificar ou atualizar estes Termos de Uso a qualquer momento, conforme necessário. Todas as alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação. Recomendamos que você reveja esta página regularmente para se manter atualizado sobre as mudanças.</li>
                    </ul>
                </SectionContent>
            </Section>

            {/* Política de Privacidade */}
            <Section>
                <SectionTitle>Política de Privacidade</SectionTitle>
                <SectionContent>
                    O GuardaPets valoriza a sua privacidade e está comprometido em proteger as informações pessoais coletadas por meio de nossa plataforma. Esta Política de Privacidade descreve em detalhes como coletamos, usamos, armazenamos e protegemos seus dados pessoais, bem como os direitos que você possui sobre as suas informações.

                    <ul>
                        <li>Coleta de Dados Pessoais: Coletamos informações pessoais como nome, e-mail, telefone e detalhes sobre o pet que está sendo disponibilizado para adoção ou doação. As informações sobre o pet podem incluir nome, tipo, idade, tamanho, gênero e uma descrição detalhada do animal. Essas informações são coletadas para facilitar a comunicação entre doadores e adotantes, tornando o processo de adoção mais eficiente.</li>
                        <li>Finalidade dos Dados: Os dados pessoais que coletamos são utilizados para:
                            <ul>
                                <li>Facilitar a comunicação: Para permitir que doadores e adotantes se comuniquem de maneira eficaz, seja por mensagens ou outros meios de contato disponíveis na plataforma.</li>
                                <li>Segurança e confiança: Para manter um ambiente seguro, livre de fraudes e abusos, garantindo que a plataforma funcione de maneira adequada e eficiente.</li>
                                <li>Personalização da experiência: Para adaptar a plataforma de acordo com suas preferências e melhorar a sua experiência de uso, oferecendo recomendações mais adequadas e notificações relevantes relacionadas à adoção ou doação de animais.</li>
                            </ul>
                        </li>
                        <li>Compartilhamento de Dados: O GuardaPets não compartilha seus dados pessoais com terceiros sem o seu consentimento prévio, exceto nas seguintes situações:
                            <ul>
                                <li>Exigência legal: Quando for necessário para cumprir com obrigações legais ou em resposta a uma solicitação legítima de autoridades competentes, como em caso de ordem judicial ou investigação policial.</li>
                                <li>Prestadores de serviço: Podemos compartilhar seus dados com prestadores de serviços que auxiliam no funcionamento da plataforma, como empresas de hospedagem de dados ou suporte técnico. Esses prestadores de serviços são contratualmente obrigados a manter a confidencialidade dos dados.</li>
                            </ul>
                        </li>
                        <li>Direitos dos Usuários: Como usuário, você tem os seguintes direitos em relação aos seus dados pessoais:
                            <ul>
                                <li>Direito de acesso: Você pode solicitar uma cópia dos dados pessoais que temos sobre você a qualquer momento.</li>
                                <li>Direito de correção: Caso algum dado esteja incorreto ou desatualizado, você tem o direito de solicitar a correção dessas informações.</li>
                                <li>Direito de exclusão: Você pode solicitar a exclusão dos seus dados pessoais da nossa plataforma, exceto quando a manutenção dos dados for necessária para fins legais ou de operação da plataforma.</li>
                                <li>Direito à portabilidade: Você pode solicitar que seus dados sejam transferidos para outro serviço, desde que seja tecnicamente viável.</li>
                            </ul>
                            Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: <HighlightedText>privacidade@guardapets.com</HighlightedText>.
                        </li>
                        <li>Segurança das Informações: O GuardaPets adota diversas medidas de segurança para proteger seus dados pessoais contra acesso não autorizado, alteração ou destruição. Utilizamos criptografia e outros recursos de segurança para proteger as informações que você compartilha conosco, garantindo que suas informações pessoais sejam tratadas de forma segura e confidencial.</li>
                        <li>Atualizações da Política de Privacidade: Esta Política de Privacidade pode ser atualizada de tempos em tempos para refletir mudanças nas nossas práticas ou em conformidade com novas leis e regulamentos. Sempre que houver uma alteração significativa, publicaremos uma atualização nesta página e informaremos aos usuários sobre as mudanças. Recomendamos que você revise periodicamente esta página para estar ciente das atualizações.</li>
                    </ul>
                </SectionContent>
            </Section>
        </Container>
    );
};

export default TermsPage;

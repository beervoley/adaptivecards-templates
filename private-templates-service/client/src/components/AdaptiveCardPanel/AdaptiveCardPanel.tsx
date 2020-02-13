import * as React from "react";
import { Container, TemplateName, ACWrapper } from "./styled";
import AdaptiveCard from '../Common/AdaptiveCard';

interface Props {
  toggleModal: () => void;
  template: any
}

class AdaptiveCardPanel extends React.Component<Props> {
  render() {
    let temp = this.props.template;
    console.log(temp);
    return (
      <Container>
        <ACWrapper>
          <AdaptiveCard toggleModal={this.props.toggleModal} cardtemplate={temp} />
        </ACWrapper>
        <TemplateName onClick={this.props.toggleModal}>{this.props.template.name}</TemplateName>
      </Container>
    );
  }
}

export default AdaptiveCardPanel;

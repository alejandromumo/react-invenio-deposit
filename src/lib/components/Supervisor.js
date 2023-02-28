import React, { Component } from "react";

import { Input, Array } from "react-invenio-forms";
import { Grid, Form, Button, Icon, Dropdown } from "semantic-ui-react";

import PropTypes from "prop-types";

const newSupervisor = {
  affiliation: "",
  name: "",
  orcid: "",
};

export class Supervisor extends Component {
  render() {
    const {
      fieldPath, // injected by the custom field loader via the `field` config property
      affiliation,
      name,
      orcid,
      icon,
      addButtonLabel,
      description,
      label,
    } = this.props;
    return (
      <Array
        fieldPath={fieldPath}
        label={label}
        icon={icon}
        addButtonLabel={addButtonLabel}
        defaultNewValue={newSupervisor}
        description={description}
      >
        {({ arrayHelpers, indexPath }) => {
          const fieldPathPrefix = `${fieldPath}.${indexPath}`;
          return (
            <Grid>
              <Grid.Column width="7">
                <Input
                  fieldPath={`${fieldPathPrefix}.affiliation`}
                  label={affiliation.label}
                  placeholder={affiliation.placeholder}
                  description={affiliation.description}
                />
              </Grid.Column>
              <Grid.Column width="8">
                <Input
                  fieldPath={`${fieldPathPrefix}.name`}
                  label={name.label}
                  placeholder={name.placeholder}
                  description={name.description}
                />
              </Grid.Column>
              <Grid.Column width="8">
                <Dropdown
                  fieldPath={`${fieldPathPrefix}.orcid`}
                  label={orcid.label}
                  placeholder={orcid.placeholder}
                  description={orcid.description}
                />
              </Grid.Column>
              <Grid.Column width="1">
                <Form.Field style={{ marginTop: "1.75rem", float: "right" }}>
                  <Button
                    aria-label="Remove field"
                    className="close-btn"
                    icon
                    onClick={() => arrayHelpers.remove(indexPath)}
                    type="button"
                  >
                    <Icon name="close" />
                  </Button>
                </Form.Field>
              </Grid.Column>
            </Grid>
          );
        }}
      </Array>
    );
  }
}

Supervisor.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  affiliation: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  orcid: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  addButtonLabel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

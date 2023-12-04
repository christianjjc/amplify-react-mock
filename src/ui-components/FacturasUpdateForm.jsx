/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getFacturas } from "../graphql/queries";
import { updateFacturas } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function FacturasUpdateForm(props) {
  const {
    id: idProp,
    facturas: facturasModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    numero: "",
    total: "",
    detalle_array: [],
    detalle_normal: "",
  };
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [total, setTotal] = React.useState(initialValues.total);
  const [detalle_array, setDetalle_array] = React.useState(
    initialValues.detalle_array
  );
  const [detalle_normal, setDetalle_normal] = React.useState(
    initialValues.detalle_normal
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = facturasRecord
      ? { ...initialValues, ...facturasRecord }
      : initialValues;
    setNumero(cleanValues.numero);
    setTotal(cleanValues.total);
    setDetalle_array(cleanValues.detalle_array ?? []);
    setCurrentDetalle_arrayValue("");
    setDetalle_normal(cleanValues.detalle_normal);
    setErrors({});
  };
  const [facturasRecord, setFacturasRecord] = React.useState(facturasModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFacturas.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFacturas
        : facturasModelProp;
      setFacturasRecord(record);
    };
    queryData();
  }, [idProp, facturasModelProp]);
  React.useEffect(resetStateValues, [facturasRecord]);
  const [currentDetalle_arrayValue, setCurrentDetalle_arrayValue] =
    React.useState("");
  const detalle_arrayRef = React.createRef();
  const validations = {
    numero: [{ type: "Required" }],
    total: [{ type: "Required" }],
    detalle_array: [{ type: "Required" }],
    detalle_normal: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          numero,
          total,
          detalle_array,
          detalle_normal: detalle_normal ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateFacturas.replaceAll("__typename", ""),
            variables: {
              input: {
                id: facturasRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FacturasUpdateForm")}
      {...rest}
    >
      <TextField
        label="Numero"
        isRequired={true}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              numero: value,
              total,
              detalle_array,
              detalle_normal,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              numero,
              total: value,
              detalle_array,
              detalle_normal,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              numero,
              total,
              detalle_array: values,
              detalle_normal,
            };
            const result = onChange(modelFields);
            values = result?.detalle_array ?? values;
          }
          setDetalle_array(values);
          setCurrentDetalle_arrayValue("");
        }}
        currentFieldValue={currentDetalle_arrayValue}
        label={"Detalle array"}
        items={detalle_array}
        hasError={errors?.detalle_array?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("detalle_array", currentDetalle_arrayValue)
        }
        errorMessage={errors?.detalle_array?.errorMessage}
        setFieldValue={setCurrentDetalle_arrayValue}
        inputFieldRef={detalle_arrayRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Detalle array"
          isRequired={true}
          isReadOnly={false}
          value={currentDetalle_arrayValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.detalle_array?.hasError) {
              runValidationTasks("detalle_array", value);
            }
            setCurrentDetalle_arrayValue(value);
          }}
          onBlur={() =>
            runValidationTasks("detalle_array", currentDetalle_arrayValue)
          }
          errorMessage={errors.detalle_array?.errorMessage}
          hasError={errors.detalle_array?.hasError}
          ref={detalle_arrayRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "detalle_array")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Detalle normal"
        isRequired={false}
        isReadOnly={false}
        value={detalle_normal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              numero,
              total,
              detalle_array,
              detalle_normal: value,
            };
            const result = onChange(modelFields);
            value = result?.detalle_normal ?? value;
          }
          if (errors.detalle_normal?.hasError) {
            runValidationTasks("detalle_normal", value);
          }
          setDetalle_normal(value);
        }}
        onBlur={() => runValidationTasks("detalle_normal", detalle_normal)}
        errorMessage={errors.detalle_normal?.errorMessage}
        hasError={errors.detalle_normal?.hasError}
        {...getOverrideProps(overrides, "detalle_normal")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || facturasModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || facturasModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
